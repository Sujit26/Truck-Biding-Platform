from faker import Faker

fake = Faker()

truck_image = [
"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/CS-Logistic-Apr13-1.jpeg?qJcpKxRxd4bdSgnbLO15jn5RqacXxERB&size=770:433",
"https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/truck.jpg",
"https://img.rolandberger.com/content_assets/content_images/captions/194_it_roland_berger_autonomous_trucks_1_image_caption_none.jpg",

]
final_truck_union = []
final_consignment = []
trucks = [
  "32 Feet Single Axel Truck (7.5 Ton Capacity)",
  "32 Feet Multi Axel Truck (16 Ton Capacity)",
  "24 Feet Single Axel Truck (7.5 Ton Capacity)",
  "24 Feet Multi Axel Truck (16 Ton Capacity)",
  "20 Feet Single Axel Truck (7.5 Ton Capacity)",
  "20 Feet Multi Axel Truck (16 Ton Capacity)",
  "32-40 Feet 14 Wheeler Truck (21 Ton To 31 Ton Capacity)",
  "20-32 Feet 10 Wheeler Truck (10 Ton To 25 Ton Capacity)",
  "24-32 Feet 12 Wheeler Truck (16 Ton To 25 Ton Capacity)",
  "14 Feet Eicher (Capacity Of 3.5 - 4 Ton Capacity)",
  "17 Feet Eicher (Capacity Of 4.5 - 5 Ton Capacity",
  "19 Feet Eicher (Capacity Of 5.5 - 10 Ton Capacity)",
]
file1 = open("truck_union.txt", "w")
file2 = open("consignment.txt", "w")

consignment_id=0
for i in range(0, 50):
    truck_union = {}
    truck_union["id"] = int(i)
    truck_union["name"] =  fake.name()
    truck_union["picture"] =  truck_image[int(i)%3]
    truck_union["description"] =  fake.paragraph(nb_sentences=10)
    truck_union["contact"] =  fake.phone_number()
    truck_union["address"] =  fake.address()
    truck_union["email"] = fake.email()
    file1.write(str(truck_union)+"\n")

    for j in range(0, 5):
        consignment = {}

        # consignment
        consignment["id"] = consignment_id
        consignment["driver_name"] = fake.name()
        consignment["consginee_name"] = fake.name()
        consignment["trasporter_id"] = truck_union["id"]
        consignment["trasporter_name"] = truck_union["name"]
        consignment["trasporter_email"] = truck_union["email"]

        consignment["driver_phone"] = fake.phone_number()
        consignment["truck_type"] = trucks[i%12]
        consignment["pickup_date"] = fake.date()
        consignment["pickup_address"] = fake.address()
        consignment["drop_off_address"] = fake.address()
        consignment["status"] = "Delivered"

        consignment_id=consignment_id+1
        file2.write(str(consignment)+'\n')


#     # print(consignment)
