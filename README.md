# com.rbc.bid

# Info
* busiess network name = blockid-network

# Commands
Create the bna file: 
```
composer archive create -t dir -n .
```

Install (Everytime you destroy and setup your fabric environment)
```
composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName blockid-network
```

Start business network from archive file and create business card network (Everytime you destroy and setup your fabric environment):
```
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile blockid-network@0.0.1.bna --file networkadmin.card
```

Import business card (Everytime you destroy and setup your fabric environment):
```
composer card import --file networkadmin.card
```

Validate business network is deployed:
```
composer network ping --card admin@blockid-network
```

Updating the network after making changes to the models
```
composer network update -c admin@blockid -a blockid-network@0.0.1.bna
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

# Setting up and Destroying Fabric environment
Get the fabric tools by following Step 4 on this page: [site](https://hyperledger.github.io/composer/installing/development-tools)

The `~/fabric-tools` folder has helper scripts.

Download fabric (Only needed for the first time)
`downloadFabric.sh`

Starting fabric 
`startFabric.sh`

Stop fabric (Will stop all docker containers, you will lose all data)
`stopFabric.sh`
