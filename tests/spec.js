module.exports = {  
  
  tags: ['blockchain','bcts','trade','supply chain finance','decentralized app'],

  before: function(browser) {
      console.log("Setting up...");
      browser.url("http://localhost:3000");
    },

    after : function(browser) {
      browser.end()
      console.log("Closing down...");
    },

    'body visible' : function (client) {
      client.waitForElementVisible('body',5000);
    },
    
    'has any input text' : function (client) {
      client.getText("#tabs", function(result) {
           console.log(result.value);
      });
    }
}