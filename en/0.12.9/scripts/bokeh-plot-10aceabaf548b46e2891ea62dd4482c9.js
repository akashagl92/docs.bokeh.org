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
      };var element = document.getElementById("01ab848d-6aa6-4bba-86e4-8918a08471ce");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '01ab848d-6aa6-4bba-86e4-8918a08471ce' but no matching script tag was found. ")
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
                    var docs_json = {"d7ccbe1d-ed43-4f6c-b15e-46be7fe3f1aa":{"roots":{"references":[{"attributes":{"data_source":{"id":"c99bbf9d-0c30-4ce8-b9f4-cecbf233ba09","type":"ColumnDataSource"},"glyph":{"id":"4fb67cd1-8efd-4993-8ba3-434ced6f056b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2384a15d-4c53-4e1f-bc7a-fe8f0af33548","type":"Circle"},"selection_glyph":null,"view":{"id":"1ae2cf08-94c8-4dc7-bddd-f8003b2316bb","type":"CDSView"}},"id":"318529b2-6652-4b2c-9467-a79354da67f4","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b29661e5-bd87-4842-a67d-267d412e7a93","type":"BasicTickFormatter"},"plot":{"id":"7362bfaa-9d4d-492a-b3be-9b863bc1a1cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2213446-dc79-4f58-9dc2-56f0625a3f62","type":"BasicTicker"}},"id":"a589a08f-1b14-469a-a941-83cbfc67ea89","type":"LinearAxis"},{"attributes":{},"id":"d2213446-dc79-4f58-9dc2-56f0625a3f62","type":"BasicTicker"},{"attributes":{},"id":"3513ef0d-63b8-491b-bfd6-4b69bb210126","type":"LinearScale"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fb67cd1-8efd-4993-8ba3-434ced6f056b","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"da81fd8e-8472-4403-b213-2ec681d858eb","type":"Title"},{"attributes":{"callback":null,"end":3},"id":"c3d03a89-f3ce-490b-a66a-c4d6426f09ae","type":"Range1d"},{"attributes":{},"id":"e6419c4e-8b4d-4366-aab8-abc9eb67472b","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"2384a15d-4c53-4e1f-bc7a-fe8f0af33548","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e6419c4e-8b4d-4366-aab8-abc9eb67472b","type":"SaveTool"}]},"id":"ef12c901-85ab-4b58-ba39-4e54a1113298","type":"Toolbar"},{"attributes":{"callback":null,"end":7},"id":"f2b4c727-c840-44d0-a606-3be77c9a5ec9","type":"Range1d"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"318529b2-6652-4b2c-9467-a79354da67f4","type":"GlyphRenderer"}]},"id":"f8a24d8b-e8bd-4b2a-8ecb-bd3ef9a3056a","type":"LegendItem"},{"attributes":{"source":{"id":"c99bbf9d-0c30-4ce8-b9f4-cecbf233ba09","type":"ColumnDataSource"}},"id":"1ae2cf08-94c8-4dc7-bddd-f8003b2316bb","type":"CDSView"},{"attributes":{"plot":{"id":"7362bfaa-9d4d-492a-b3be-9b863bc1a1cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2213446-dc79-4f58-9dc2-56f0625a3f62","type":"BasicTicker"}},"id":"d4cb14e7-d004-4650-a04c-7fbe2bdbe8c0","type":"Grid"},{"attributes":{"formatter":{"id":"48438d58-406e-4762-b0cd-6a70f43c6201","type":"BasicTickFormatter"},"plot":{"id":"7362bfaa-9d4d-492a-b3be-9b863bc1a1cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"c65d6c86-53f2-4675-9f39-b3ab6af994b1","type":"BasicTicker"}},"id":"3f607654-5269-4264-916f-ae770126cc05","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","color","label"],"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]}},"id":"c99bbf9d-0c30-4ce8-b9f4-cecbf233ba09","type":"ColumnDataSource"},{"attributes":{},"id":"c65d6c86-53f2-4675-9f39-b3ab6af994b1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7362bfaa-9d4d-492a-b3be-9b863bc1a1cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"c65d6c86-53f2-4675-9f39-b3ab6af994b1","type":"BasicTicker"}},"id":"c4e378dc-f005-486e-9ab7-a8c493f993da","type":"Grid"},{"attributes":{"below":[{"id":"a589a08f-1b14-469a-a941-83cbfc67ea89","type":"LinearAxis"}],"left":[{"id":"3f607654-5269-4264-916f-ae770126cc05","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"a589a08f-1b14-469a-a941-83cbfc67ea89","type":"LinearAxis"},{"id":"d4cb14e7-d004-4650-a04c-7fbe2bdbe8c0","type":"Grid"},{"id":"3f607654-5269-4264-916f-ae770126cc05","type":"LinearAxis"},{"id":"c4e378dc-f005-486e-9ab7-a8c493f993da","type":"Grid"},{"id":"62f011bd-5fe3-46eb-8113-b6f3a8682cd3","type":"Legend"},{"id":"318529b2-6652-4b2c-9467-a79354da67f4","type":"GlyphRenderer"}],"title":{"id":"da81fd8e-8472-4403-b213-2ec681d858eb","type":"Title"},"toolbar":{"id":"ef12c901-85ab-4b58-ba39-4e54a1113298","type":"Toolbar"},"x_range":{"id":"f2b4c727-c840-44d0-a606-3be77c9a5ec9","type":"Range1d"},"x_scale":{"id":"0bb02c0b-0a25-415c-84e5-362610256f7b","type":"LinearScale"},"y_range":{"id":"c3d03a89-f3ce-490b-a66a-c4d6426f09ae","type":"Range1d"},"y_scale":{"id":"3513ef0d-63b8-491b-bfd6-4b69bb210126","type":"LinearScale"}},"id":"7362bfaa-9d4d-492a-b3be-9b863bc1a1cf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0bb02c0b-0a25-415c-84e5-362610256f7b","type":"LinearScale"},{"attributes":{},"id":"b29661e5-bd87-4842-a67d-267d412e7a93","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"f8a24d8b-e8bd-4b2a-8ecb-bd3ef9a3056a","type":"LegendItem"}],"plot":{"id":"7362bfaa-9d4d-492a-b3be-9b863bc1a1cf","subtype":"Figure","type":"Plot"}},"id":"62f011bd-5fe3-46eb-8113-b6f3a8682cd3","type":"Legend"},{"attributes":{},"id":"48438d58-406e-4762-b0cd-6a70f43c6201","type":"BasicTickFormatter"}],"root_ids":["7362bfaa-9d4d-492a-b3be-9b863bc1a1cf"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"d7ccbe1d-ed43-4f6c-b15e-46be7fe3f1aa","elementid":"01ab848d-6aa6-4bba-86e4-8918a08471ce","modelid":"7362bfaa-9d4d-492a-b3be-9b863bc1a1cf"}];
                
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
