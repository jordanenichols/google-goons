var req = new XMLHttpRequest();

req.open("GET", "chrome://yourextension/content/peopleDB.xml", false); 
req.send(null);

var xmlDoc = req.responseXML;		

var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);

var personIterator = xmlDoc.evaluate('//person', xmlDoc, nsResolver, XPathResult.ANY_TYPE, null );
