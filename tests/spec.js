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


  // Test Case for Industry Articles
 'Test for Industry Articles tab': function (client) {
   client.expect.element('Industry Articles', 'link text').to.be.present;
 },

 'Test for Industry Articles tab click': function (client) {
   client.click('link text', 'Industry Articles');
   client.expect.element('#tab4 h2', 'css selector').text.to.contain('Industry Articles');
   client.expect.element('#tab4 p', 'css selector').text.to.contain('Supply Chain Overview:');
 }

}