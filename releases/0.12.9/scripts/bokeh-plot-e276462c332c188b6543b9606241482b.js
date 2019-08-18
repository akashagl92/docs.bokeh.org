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
      };var element = document.getElementById("ab7f4a29-eb32-4c43-8564-4e7009a9aef8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab7f4a29-eb32-4c43-8564-4e7009a9aef8' but no matching script tag was found. ")
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
                    var docs_json = {"eabef3c7-f092-4d3a-8d86-63370d5bbbb1":{"roots":{"references":[{"attributes":{"formatter":{"id":"ce29962b-15cc-47d2-b78e-26541bc237ae","type":"BasicTickFormatter"},"plot":{"id":"867a2abb-49c3-40dc-9f8e-cc6d7b7142cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c8627a1-2d21-4f83-96f5-4585de6fc985","type":"BasicTicker"}},"id":"27e5ae24-7a5a-40a3-8b62-c205c771fb91","type":"LinearAxis"},{"attributes":{},"id":"4fe7e9a1-bf29-454f-b3c1-a3d21bd763f6","type":"ResetTool"},{"attributes":{},"id":"5c8627a1-2d21-4f83-96f5-4585de6fc985","type":"BasicTicker"},{"attributes":{},"id":"1869e2c7-4114-4f8f-9cc0-e8a5daa69c8a","type":"BasicTickFormatter"},{"attributes":{},"id":"814b56d4-ecfe-450a-a2b1-03a6d6d24688","type":"PanTool"},{"attributes":{},"id":"6648da20-e265-4df0-aecc-c2fc18c4ce07","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1869e2c7-4114-4f8f-9cc0-e8a5daa69c8a","type":"BasicTickFormatter"},"plot":{"id":"867a2abb-49c3-40dc-9f8e-cc6d7b7142cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"6648da20-e265-4df0-aecc-c2fc18c4ce07","type":"BasicTicker"}},"id":"014dadbc-5fda-47a9-9326-3b07cc2e93bb","type":"LinearAxis"},{"attributes":{"plot":{"id":"867a2abb-49c3-40dc-9f8e-cc6d7b7142cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c8627a1-2d21-4f83-96f5-4585de6fc985","type":"BasicTicker"}},"id":"806831b0-0023-427a-baff-d52e7616b3bd","type":"Grid"},{"attributes":{},"id":"f16693a0-e61c-43dd-b93f-1f936fa900f9","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4606b307-9e93-4c9d-9657-5a138cf28e77","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"27e5ae24-7a5a-40a3-8b62-c205c771fb91","type":"LinearAxis"},{"id":"534e491e-6213-4f48-beb9-06b0d1d708bf","type":"Title"}],"left":[{"id":"014dadbc-5fda-47a9-9326-3b07cc2e93bb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"27e5ae24-7a5a-40a3-8b62-c205c771fb91","type":"LinearAxis"},{"id":"806831b0-0023-427a-baff-d52e7616b3bd","type":"Grid"},{"id":"014dadbc-5fda-47a9-9326-3b07cc2e93bb","type":"LinearAxis"},{"id":"689a662d-6269-41d2-93af-062a6c52596b","type":"Grid"},{"id":"4606b307-9e93-4c9d-9657-5a138cf28e77","type":"BoxAnnotation"},{"id":"7458fc32-3b7d-4b33-b3e1-220440615c1f","type":"GlyphRenderer"},{"id":"534e491e-6213-4f48-beb9-06b0d1d708bf","type":"Title"}],"title":{"id":"c6fc14d4-887e-40ec-90b2-17ec0dcbaac9","type":"Title"},"title_location":"left","toolbar":{"id":"af853880-e0b7-42d3-8f7e-36915b6603d1","type":"Toolbar"},"x_range":{"id":"ee9bd1eb-d968-427e-8837-a3c99e25bcb5","type":"DataRange1d"},"x_scale":{"id":"08a54b5b-1a7c-4e2f-8d21-06377ed367f7","type":"LinearScale"},"y_range":{"id":"773ec506-c181-4ba2-91f2-fa2f73a0bb6a","type":"DataRange1d"},"y_scale":{"id":"ab53cb42-844e-48d0-8f93-246461d24990","type":"LinearScale"}},"id":"867a2abb-49c3-40dc-9f8e-cc6d7b7142cb","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Left Title"},"id":"c6fc14d4-887e-40ec-90b2-17ec0dcbaac9","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"20ac058d-7fbb-4c43-a659-8727f0271ac3","type":"Circle"},{"attributes":{"align":"center","plot":{"id":"867a2abb-49c3-40dc-9f8e-cc6d7b7142cb","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"534e491e-6213-4f48-beb9-06b0d1d708bf","type":"Title"},{"attributes":{"callback":null},"id":"ee9bd1eb-d968-427e-8837-a3c99e25bcb5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"814b56d4-ecfe-450a-a2b1-03a6d6d24688","type":"PanTool"},{"id":"053b7a1f-90bb-4a1f-9cd3-d1f386d8b376","type":"WheelZoomTool"},{"id":"5b4a532f-45ad-4436-bb17-9e146b4a9236","type":"BoxZoomTool"},{"id":"bf52b3ab-370a-4adf-ac58-30c9595c46db","type":"SaveTool"},{"id":"4fe7e9a1-bf29-454f-b3c1-a3d21bd763f6","type":"ResetTool"},{"id":"f16693a0-e61c-43dd-b93f-1f936fa900f9","type":"HelpTool"}]},"id":"af853880-e0b7-42d3-8f7e-36915b6603d1","type":"Toolbar"},{"attributes":{"source":{"id":"8d529498-6ff9-43fe-8e46-39cc2ea7c786","type":"ColumnDataSource"}},"id":"ec81cdb8-5690-49c3-919e-dd1d8dc94887","type":"CDSView"},{"attributes":{},"id":"053b7a1f-90bb-4a1f-9cd3-d1f386d8b376","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"8d529498-6ff9-43fe-8e46-39cc2ea7c786","type":"ColumnDataSource"},{"attributes":{},"id":"08a54b5b-1a7c-4e2f-8d21-06377ed367f7","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa60427a-3958-4faa-8f56-bfd9441bb760","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"867a2abb-49c3-40dc-9f8e-cc6d7b7142cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"6648da20-e265-4df0-aecc-c2fc18c4ce07","type":"BasicTicker"}},"id":"689a662d-6269-41d2-93af-062a6c52596b","type":"Grid"},{"attributes":{},"id":"ce29962b-15cc-47d2-b78e-26541bc237ae","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"773ec506-c181-4ba2-91f2-fa2f73a0bb6a","type":"DataRange1d"},{"attributes":{},"id":"bf52b3ab-370a-4adf-ac58-30c9595c46db","type":"SaveTool"},{"attributes":{},"id":"ab53cb42-844e-48d0-8f93-246461d24990","type":"LinearScale"},{"attributes":{"data_source":{"id":"8d529498-6ff9-43fe-8e46-39cc2ea7c786","type":"ColumnDataSource"},"glyph":{"id":"20ac058d-7fbb-4c43-a659-8727f0271ac3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aa60427a-3958-4faa-8f56-bfd9441bb760","type":"Circle"},"selection_glyph":null,"view":{"id":"ec81cdb8-5690-49c3-919e-dd1d8dc94887","type":"CDSView"}},"id":"7458fc32-3b7d-4b33-b3e1-220440615c1f","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"4606b307-9e93-4c9d-9657-5a138cf28e77","type":"BoxAnnotation"}},"id":"5b4a532f-45ad-4436-bb17-9e146b4a9236","type":"BoxZoomTool"}],"root_ids":["867a2abb-49c3-40dc-9f8e-cc6d7b7142cb"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"eabef3c7-f092-4d3a-8d86-63370d5bbbb1","elementid":"ab7f4a29-eb32-4c43-8564-4e7009a9aef8","modelid":"867a2abb-49c3-40dc-9f8e-cc6d7b7142cb"}];
                
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
