(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("bb197ce0-458f-40ae-a532-1dc708fee30a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb197ce0-458f-40ae-a532-1dc708fee30a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"5c1df3ba-746a-440e-9728-e9e1bf7fc7e9":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"b62fa0d3-c76d-4c11-8c5a-90a2b711636d","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"88e93e7f-f60b-4f48-aa10-11c4533376cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a127af2-d719-41db-aa65-573f8d7e68bc","type":"BasicTicker"}},"id":"20e6baf5-10ea-4813-83ad-ac746f64fcf5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"72aa4cc8-6c6f-4c9b-b04e-6e296d71d0aa","type":"Dodge"}}},"id":"97fe8ca7-9d07-4919-aa53-672055287455","type":"VBar"},{"attributes":{},"id":"9a127af2-d719-41db-aa65-573f8d7e68bc","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"72aa4cc8-6c6f-4c9b-b04e-6e296d71d0aa","type":"Dodge"}}},"id":"e20313e4-fba7-4b61-8120-e458c5014951","type":"VBar"},{"attributes":{"data_source":{"id":"54c9e331-ad04-423a-9bcd-3be51d9bb20b","type":"ColumnDataSource"},"glyph":{"id":"e20313e4-fba7-4b61-8120-e458c5014951","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97fe8ca7-9d07-4919-aa53-672055287455","type":"VBar"},"selection_glyph":null,"view":{"id":"38a92a26-9b7b-4f1b-9905-a17b26714f85","type":"CDSView"}},"id":"f5d691e5-aac9-42bd-a37a-4e74ff553a62","type":"GlyphRenderer"},{"attributes":{},"id":"a3de8d47-8f95-429e-8022-d616db076f94","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"fd0cf7c7-0bd7-4183-8aa2-bc14e2d6f476","type":"CategoricalTickFormatter"},"plot":{"id":"88e93e7f-f60b-4f48-aa10-11c4533376cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3de8d47-8f95-429e-8022-d616db076f94","type":"CategoricalTicker"}},"id":"0b782120-b5ca-4b5e-851b-3a83bf9aa1a8","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"fcdcd76d-05d6-4b71-9a19-feb33b89f805","type":"Title"},{"attributes":{"source":{"id":"54c9e331-ad04-423a-9bcd-3be51d9bb20b","type":"ColumnDataSource"}},"id":"38a92a26-9b7b-4f1b-9905-a17b26714f85","type":"CDSView"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"f5d691e5-aac9-42bd-a37a-4e74ff553a62","type":"GlyphRenderer"}]},"id":"9b0332e5-dea6-4027-8a11-c8b4f5598cec","type":"LegendItem"},{"attributes":{"formatter":{"id":"2eb44441-d031-4449-8e29-533808d470b7","type":"BasicTickFormatter"},"plot":{"id":"88e93e7f-f60b-4f48-aa10-11c4533376cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a127af2-d719-41db-aa65-573f8d7e68bc","type":"BasicTicker"}},"id":"5ea8804f-d013-4786-b88d-01f124b7de66","type":"LinearAxis"},{"attributes":{"below":[{"id":"0b782120-b5ca-4b5e-851b-3a83bf9aa1a8","type":"CategoricalAxis"}],"left":[{"id":"5ea8804f-d013-4786-b88d-01f124b7de66","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"0b782120-b5ca-4b5e-851b-3a83bf9aa1a8","type":"CategoricalAxis"},{"id":"b7e144d6-7198-48ba-b0b2-073f8c950b84","type":"Grid"},{"id":"5ea8804f-d013-4786-b88d-01f124b7de66","type":"LinearAxis"},{"id":"20e6baf5-10ea-4813-83ad-ac746f64fcf5","type":"Grid"},{"id":"a4ca90ae-f0ce-41bc-8868-12267a34470a","type":"Legend"},{"id":"b414321b-dbed-4699-996e-b10953385a2f","type":"GlyphRenderer"},{"id":"a1de7d11-905b-4d5c-adf7-a6bbb59a3091","type":"GlyphRenderer"},{"id":"f5d691e5-aac9-42bd-a37a-4e74ff553a62","type":"GlyphRenderer"}],"title":{"id":"fcdcd76d-05d6-4b71-9a19-feb33b89f805","type":"Title"},"toolbar":{"id":"cbb3d571-b92c-4a8e-9cd0-44f995e3f70c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b62fa0d3-c76d-4c11-8c5a-90a2b711636d","type":"FactorRange"},"x_scale":{"id":"082a79d0-72cd-44e9-8eea-b7bb6bae65bd","type":"CategoricalScale"},"y_range":{"id":"eba1ee3c-fea2-41b5-bb9e-e4aee1474a5e","type":"Range1d"},"y_scale":{"id":"16fb1a1f-e949-42cf-a470-7441c4d9f3e1","type":"LinearScale"}},"id":"88e93e7f-f60b-4f48-aa10-11c4533376cc","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":10},"id":"eba1ee3c-fea2-41b5-bb9e-e4aee1474a5e","type":"Range1d"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"54c9e331-ad04-423a-9bcd-3be51d9bb20b","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"88e93e7f-f60b-4f48-aa10-11c4533376cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3de8d47-8f95-429e-8022-d616db076f94","type":"CategoricalTicker"}},"id":"b7e144d6-7198-48ba-b0b2-073f8c950b84","type":"Grid"},{"attributes":{"items":[{"id":"fc5f2708-af4a-4dc0-a384-7a99d0658717","type":"LegendItem"},{"id":"7fe2c23f-7e69-4c55-8e16-fa840e3b1880","type":"LegendItem"},{"id":"9b0332e5-dea6-4027-8a11-c8b4f5598cec","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"88e93e7f-f60b-4f48-aa10-11c4533376cc","subtype":"Figure","type":"Plot"}},"id":"a4ca90ae-f0ce-41bc-8868-12267a34470a","type":"Legend"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"895bf9a2-12ab-4b05-b94d-79444e441927","type":"Dodge"}}},"id":"ab324e6e-8539-4443-80df-ca56f1f3893f","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"895bf9a2-12ab-4b05-b94d-79444e441927","type":"Dodge"}}},"id":"e0a757a3-fe34-4cbf-bc73-61cf5183874f","type":"VBar"},{"attributes":{"range":{"id":"b62fa0d3-c76d-4c11-8c5a-90a2b711636d","type":"FactorRange"},"value":0.25},"id":"72aa4cc8-6c6f-4c9b-b04e-6e296d71d0aa","type":"Dodge"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"b414321b-dbed-4699-996e-b10953385a2f","type":"GlyphRenderer"}]},"id":"fc5f2708-af4a-4dc0-a384-7a99d0658717","type":"LegendItem"},{"attributes":{"data_source":{"id":"54c9e331-ad04-423a-9bcd-3be51d9bb20b","type":"ColumnDataSource"},"glyph":{"id":"ab324e6e-8539-4443-80df-ca56f1f3893f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e0a757a3-fe34-4cbf-bc73-61cf5183874f","type":"VBar"},"selection_glyph":null,"view":{"id":"0b44b0be-7f10-4b9e-8793-2d03a6fc3fad","type":"CDSView"}},"id":"b414321b-dbed-4699-996e-b10953385a2f","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cbb3d571-b92c-4a8e-9cd0-44f995e3f70c","type":"Toolbar"},{"attributes":{},"id":"fd0cf7c7-0bd7-4183-8aa2-bc14e2d6f476","type":"CategoricalTickFormatter"},{"attributes":{},"id":"082a79d0-72cd-44e9-8eea-b7bb6bae65bd","type":"CategoricalScale"},{"attributes":{"source":{"id":"54c9e331-ad04-423a-9bcd-3be51d9bb20b","type":"ColumnDataSource"}},"id":"0b44b0be-7f10-4b9e-8793-2d03a6fc3fad","type":"CDSView"},{"attributes":{"range":{"id":"b62fa0d3-c76d-4c11-8c5a-90a2b711636d","type":"FactorRange"},"value":-0.25},"id":"895bf9a2-12ab-4b05-b94d-79444e441927","type":"Dodge"},{"attributes":{},"id":"2eb44441-d031-4449-8e29-533808d470b7","type":"BasicTickFormatter"},{"attributes":{"range":{"id":"b62fa0d3-c76d-4c11-8c5a-90a2b711636d","type":"FactorRange"}},"id":"47a3b85e-fdba-439f-acbd-5f41f0202e52","type":"Dodge"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"47a3b85e-fdba-439f-acbd-5f41f0202e52","type":"Dodge"}}},"id":"91888c2f-2c91-4b98-86eb-ff10a1267593","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"47a3b85e-fdba-439f-acbd-5f41f0202e52","type":"Dodge"}}},"id":"8779451b-8739-4bc4-ba3d-4d65a051c1e7","type":"VBar"},{"attributes":{},"id":"16fb1a1f-e949-42cf-a470-7441c4d9f3e1","type":"LinearScale"},{"attributes":{"data_source":{"id":"54c9e331-ad04-423a-9bcd-3be51d9bb20b","type":"ColumnDataSource"},"glyph":{"id":"91888c2f-2c91-4b98-86eb-ff10a1267593","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8779451b-8739-4bc4-ba3d-4d65a051c1e7","type":"VBar"},"selection_glyph":null,"view":{"id":"191d1f9c-d9b7-432d-b86d-75d65815de14","type":"CDSView"}},"id":"a1de7d11-905b-4d5c-adf7-a6bbb59a3091","type":"GlyphRenderer"},{"attributes":{"source":{"id":"54c9e331-ad04-423a-9bcd-3be51d9bb20b","type":"ColumnDataSource"}},"id":"191d1f9c-d9b7-432d-b86d-75d65815de14","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"a1de7d11-905b-4d5c-adf7-a6bbb59a3091","type":"GlyphRenderer"}]},"id":"7fe2c23f-7e69-4c55-8e16-fa840e3b1880","type":"LegendItem"}],"root_ids":["88e93e7f-f60b-4f48-aa10-11c4533376cc"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"5c1df3ba-746a-440e-9728-e9e1bf7fc7e9","elementid":"bb197ce0-458f-40ae-a532-1dc708fee30a","modelid":"88e93e7f-f60b-4f48-aa10-11c4533376cc"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();