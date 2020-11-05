# System requirements
nodeJS  
mongoDB

## Use cases
1 - Auth user to DB  
2 - CRUD for gear (assets)  
3 - CRUD for customers  
4 - Query customer's rental records

## DB Collections & Documents
+ assets    
	- Asset ID
	- Serial Number
	- IP address
	- Subnet Mask
	- OS username
	- OS password
	- Currently Rented
	- Initial cost
	- Rental Income
+ clients
	- Company Name
	- Contact Name
	- Contact Phone Number
	- Assets Rented
+ users
	- Username
	- Password

### Routes
/ <--- home page (log in) --->  
/:id <--- home page for logged in user, using user's DB ID as URL ID variable --->  

/assets <--- get all assets --->  
/createasset <--- create asset --->  
/readasset <--- get all assets --->  
/updateasset <--- update asset --->  
/deleteasset <--- delete asset --->  
/:asset <--- get specific asset --->  

/clients <--- get all clients --->  
/createclient <--- create client --->  
/readclient <--- get all clients --->  
/updateclient <--- update client --->  
/deleteclient <--- delete client --->  
/:customer <--- get specific client info --->   

/users <--- get all users --->  
/createuser <--- create user --->  
/readuser <--- get all users --->  
/updateuser <--- update user --->  
/deleteuser <--- delete user --->  
/:user <--- get specific user --->  
