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
      };var element = document.getElementById("ac155919-d4cb-4bbb-a27e-47f093a9c967");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac155919-d4cb-4bbb-a27e-47f093a9c967' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"13988fec-72ef-4183-ae78-7f510c79a26a":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"a78cc962-79a0-48f0-a87b-5ad3e3b69e41","subtype":"Figure","type":"Plot"},"ticker":{"id":"033080a7-80bb-4fa7-8c89-d4ba0269b1f6","type":"BasicTicker"}},"id":"eb0b6275-14ba-40f0-8d8f-856fa817f802","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"01142ab1-763c-4fdd-bb07-cef403bfd999","type":"DataRange1d"},{"attributes":{},"id":"bd1509c1-eec1-4c84-8e63-d27ab3f245f9","type":"BasicTickFormatter"},{"attributes":{},"id":"2415e809-3b4a-42ac-b68b-7d32fadfbc97","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"7daa79ec-5c9e-481d-bc44-53e58459c49b","type":"ColumnDataSource"}},"id":"d1f5f952-896e-424a-b9ad-12044a8032c5","type":"CDSView"},{"attributes":{},"id":"b60b349d-9046-43fa-b0e3-40b2fe51b1d7","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"2415e809-3b4a-42ac-b68b-7d32fadfbc97","type":"CategoricalTickFormatter"},"plot":{"id":"a78cc962-79a0-48f0-a87b-5ad3e3b69e41","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe274871-c025-4168-b0fc-73627fa6defc","type":"CategoricalTicker"}},"id":"dfa95b2b-e7f8-4a91-9649-49521e141797","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"0cc31743-3838-44ff-98b2-35818ef4e1e5","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"b140d80e-0f69-48ef-8bb8-8ebb7112d700","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"a78cc962-79a0-48f0-a87b-5ad3e3b69e41","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe274871-c025-4168-b0fc-73627fa6defc","type":"CategoricalTicker"}},"id":"4c55160f-9934-413d-bf88-23efba821cb4","type":"Grid"},{"attributes":{},"id":"1a6ea013-592b-4a15-ac15-9ce80e9cf5ac","type":"LinearScale"},{"attributes":{"below":[{"id":"dfa95b2b-e7f8-4a91-9649-49521e141797","type":"CategoricalAxis"}],"left":[{"id":"85ab5a71-059f-4d84-8b88-a556808e32a4","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"dfa95b2b-e7f8-4a91-9649-49521e141797","type":"CategoricalAxis"},{"id":"4c55160f-9934-413d-bf88-23efba821cb4","type":"Grid"},{"id":"85ab5a71-059f-4d84-8b88-a556808e32a4","type":"LinearAxis"},{"id":"eb0b6275-14ba-40f0-8d8f-856fa817f802","type":"Grid"},{"id":"1e386cbb-9cb1-4015-9c6a-0b88b57b53d4","type":"GlyphRenderer"}],"title":{"id":"eae9ffa2-4e07-4982-9ac2-438c568f9b9d","type":"Title"},"toolbar":{"id":"3d9a934b-2d04-4fc3-8c76-df8935bab754","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b1b54a99-3a33-4eb7-98be-212b4ea144ed","type":"FactorRange"},"x_scale":{"id":"b60b349d-9046-43fa-b0e3-40b2fe51b1d7","type":"CategoricalScale"},"y_range":{"id":"01142ab1-763c-4fdd-bb07-cef403bfd999","type":"DataRange1d"},"y_scale":{"id":"1a6ea013-592b-4a15-ac15-9ce80e9cf5ac","type":"LinearScale"}},"id":"a78cc962-79a0-48f0-a87b-5ad3e3b69e41","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7daa79ec-5c9e-481d-bc44-53e58459c49b","type":"ColumnDataSource"},"glyph":{"id":"b140d80e-0f69-48ef-8bb8-8ebb7112d700","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0cc31743-3838-44ff-98b2-35818ef4e1e5","type":"VBar"},"selection_glyph":null,"view":{"id":"d1f5f952-896e-424a-b9ad-12044a8032c5","type":"CDSView"}},"id":"1e386cbb-9cb1-4015-9c6a-0b88b57b53d4","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3d9a934b-2d04-4fc3-8c76-df8935bab754","type":"Toolbar"},{"attributes":{"formatter":{"id":"bd1509c1-eec1-4c84-8e63-d27ab3f245f9","type":"BasicTickFormatter"},"plot":{"id":"a78cc962-79a0-48f0-a87b-5ad3e3b69e41","subtype":"Figure","type":"Plot"},"ticker":{"id":"033080a7-80bb-4fa7-8c89-d4ba0269b1f6","type":"BasicTicker"}},"id":"85ab5a71-059f-4d84-8b88-a556808e32a4","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"eae9ffa2-4e07-4982-9ac2-438c568f9b9d","type":"Title"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"7daa79ec-5c9e-481d-bc44-53e58459c49b","type":"ColumnDataSource"},{"attributes":{},"id":"fe274871-c025-4168-b0fc-73627fa6defc","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"b1b54a99-3a33-4eb7-98be-212b4ea144ed","type":"FactorRange"},{"attributes":{},"id":"033080a7-80bb-4fa7-8c89-d4ba0269b1f6","type":"BasicTicker"}],"root_ids":["a78cc962-79a0-48f0-a87b-5ad3e3b69e41"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"13988fec-72ef-4183-ae78-7f510c79a26a","elementid":"ac155919-d4cb-4bbb-a27e-47f093a9c967","modelid":"a78cc962-79a0-48f0-a87b-5ad3e3b69e41"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
