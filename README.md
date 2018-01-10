# com.rbc.bid

# Info
* busiess network name = blockid-network

# Commands
Create the bna file: 
```
composer archive create -t dir -n .
```

Install (one off?)
```
composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName blockid-network
```

Start business network from archive file and create business card network (one off):
```
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile blockid-network@0.0.1.bna --file networkadmin.card
```

Import business card (one off):
```
composer card import --file networkadmin.card
```

Validate business network is deployed:
```
composer network ping --card admin@blockid-network
```

# Run the webserver (Swagger)
```
composer-rest-server
```

Credentials:
```
admin@blockid-network
never use namespaces
N
Y
N

```