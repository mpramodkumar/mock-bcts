module.exports = {

  tags: ['blockchain', 'bcts', 'trade', 'supply chain finance', 'decentralized app'],

  before: function (browser) {
    console.log("Setting up...");
    browser.url("http://localhost:3000");
  },

  after: function (browser) {
    browser.end()
    console.log("Closing down...");
  },

  'body visible': function (client) {
    client.waitForElementVisible('body', 5000);
  },

  'has all the required links in left nav': function (client) {
    var reqNavLinks = new Array("Overview",
                                "Industry Players",
                                "Competitive Analysis",
                                "Industry Articles",
                                "Technical Articles",
                                "Glossary",
                                "Code Spikes",
                                "Implementation"
                                );
    
    reqNavLinks.forEach(function (navLink) {                               
      client.expect.element(navLink, 'link text').to.be.present;
    }); 
  },
  
  'Test for Glossary': function (client) {
   client.expect.element('Glossary', 'link text').to.be.present;
  },

  'Test for Technical articles tab click': function (client) {
   client.click('link text', 'Glossary');
   client.expect.element('#tab6 h2', 'css selector').text.to.contain('Glossary');
  }

}