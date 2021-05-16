import React, { Component } from "react";
import UploadFilesService from "../../service/UploadService";

import LinearProgress from "@material-ui/core/LinearProgress";
import {
  Box,
  Typography,
  Button,
  ListItem,
  withStyles,
} from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    console.log(props.keyword);
    this.state = {
      keyword: props.keyword,
      selectedFiles: null,
      currentFile: null,
      progress: 0,
      message: "",
      isError: false,
      fileInfos: [],
    };
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }
  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadFilesService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
          isError: false,
        });
        return UploadFilesService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: null,
          isError: true,
        });
      });

    this.setState({
      selectedFiles: null,
    });
  }
  componentDidMount() {
    UploadFilesService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      isError,
    } = this.state;

    return (
      <div className="mg20" style={{ margin: 20 }}>
        {currentFile && (
          <Box className="mb25" display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35}>
              <Typography
                variant="body2"
                color="textSecondary"
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        )}
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: "none" }}
            type="file"
            onChange={this.selectFile}
          />
          <Button className="btn-choose" variant="outlined" component="span">
            Choose Files
          </Button>
        </label>
        <div className="file-name">
          {selectedFiles && selectedFiles.length > 0
            ? selectedFiles[0].name
            : null}
        </div>
        <Button
          className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload {this.state.keyword}
        </Button>

        <Typography
          variant="subtitle2"
          className={`upload-message ${isError ? "error" : ""}`}
        >
          {message}
        </Typography>

        <ul className="list-group">
          {fileInfos &&
            fileInfos.map((file, index) => (
              <ListItem divider key={index}>
                <a href={file.url}>{file.name}</a>
              </ListItem>
            ))}
        </ul>
      </div>
    );
  }
}
