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
      };var element = document.getElementById("160f9239-3869-4589-b7fd-71d7753a44b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '160f9239-3869-4589-b7fd-71d7753a44b2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                    
                  var docs_json = '{"a3664bb5-50ee-4c42-bf6e-b97b293d2d69":{"roots":{"references":[{"attributes":{},"id":"efb4c49e-bef8-47bd-a8f0-b37c3536e0ba","type":"SaveTool"},{"attributes":{"source":{"id":"f4112e08-e401-438d-aa46-6c2043c7f75b","type":"ColumnDataSource"}},"id":"775776b4-a8c9-4692-aa7a-7bd32a31e26f","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fe3448fb-04ef-4c2b-837b-f4c369da3d60","type":"PanTool"},{"id":"d66a9c50-c49a-470d-b108-1c05f4f25d4a","type":"ResetTool"},{"id":"efb4c49e-bef8-47bd-a8f0-b37c3536e0ba","type":"SaveTool"}]},"id":"573b329e-afe2-4a62-9e05-ae82bcc6696a","type":"Toolbar"},{"attributes":{"callback":null},"id":"6f762390-83f7-48be-b4bf-51b207314d99","type":"DataRange1d"},{"attributes":{},"id":"e13f380d-9a2b-4207-8442-8852924b5ab5","type":"BasicTickFormatter"},{"attributes":{},"id":"f7708a15-9959-419f-9fb4-f64d51d879cb","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f4112e08-e401-438d-aa46-6c2043c7f75b","type":"ColumnDataSource"},"glyph":{"id":"4de07d66-53c3-4913-b2c9-8664a26380f0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7223add9-7c06-4cc7-828b-dcccee45e321","type":"Circle"},"selection_glyph":null,"view":{"id":"775776b4-a8c9-4692-aa7a-7bd32a31e26f","type":"CDSView"}},"id":"af3812a6-e203-4d2d-ae2d-210494eaecbe","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6d568f42-e837-431e-8219-b4085fd3a007","type":"BasicTickFormatter"},"plot":{"id":"5d3563b9-2320-4385-b311-0b67a4927682","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7708a15-9959-419f-9fb4-f64d51d879cb","type":"BasicTicker"}},"id":"d3e8cc90-9852-451c-a9e3-b6dbed49769a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4580039d-bcb6-43e8-9b29-d46a688ef3eb","type":"DataRange1d"},{"attributes":{},"id":"acbe9eb1-961c-4143-b4f3-db57695ff017","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"f4112e08-e401-438d-aa46-6c2043c7f75b","type":"ColumnDataSource"},{"attributes":{},"id":"92fee47e-4ee4-448b-a223-153c3613cf88","type":"LinearScale"},{"attributes":{},"id":"6d568f42-e837-431e-8219-b4085fd3a007","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5d3563b9-2320-4385-b311-0b67a4927682","subtype":"Figure","type":"Plot"},"ticker":{"id":"393c2a7c-1dac-4928-8b4a-32c7157ef759","type":"BasicTicker"}},"id":"8e2807ad-0148-4c9e-a5fc-272bd9e7c2a3","type":"Grid"},{"attributes":{},"id":"fe3448fb-04ef-4c2b-837b-f4c369da3d60","type":"PanTool"},{"attributes":{"formatter":{"id":"e13f380d-9a2b-4207-8442-8852924b5ab5","type":"BasicTickFormatter"},"plot":{"id":"5d3563b9-2320-4385-b311-0b67a4927682","subtype":"Figure","type":"Plot"},"ticker":{"id":"393c2a7c-1dac-4928-8b4a-32c7157ef759","type":"BasicTicker"}},"id":"2eed1364-0768-46ad-945e-d8d714b08095","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"9cfe4fcd-24d2-4f82-a19f-f8062fe0f2f2","type":"Title"},{"attributes":{},"id":"393c2a7c-1dac-4928-8b4a-32c7157ef759","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5d3563b9-2320-4385-b311-0b67a4927682","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7708a15-9959-419f-9fb4-f64d51d879cb","type":"BasicTicker"}},"id":"9945469f-8486-4849-8b55-fce2b6a3189f","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"4de07d66-53c3-4913-b2c9-8664a26380f0","type":"Circle"},{"attributes":{},"id":"d66a9c50-c49a-470d-b108-1c05f4f25d4a","type":"ResetTool"},{"attributes":{"below":[{"id":"2eed1364-0768-46ad-945e-d8d714b08095","type":"LinearAxis"}],"left":[{"id":"d3e8cc90-9852-451c-a9e3-b6dbed49769a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2eed1364-0768-46ad-945e-d8d714b08095","type":"LinearAxis"},{"id":"8e2807ad-0148-4c9e-a5fc-272bd9e7c2a3","type":"Grid"},{"id":"d3e8cc90-9852-451c-a9e3-b6dbed49769a","type":"LinearAxis"},{"id":"9945469f-8486-4849-8b55-fce2b6a3189f","type":"Grid"},{"id":"af3812a6-e203-4d2d-ae2d-210494eaecbe","type":"GlyphRenderer"}],"title":{"id":"9cfe4fcd-24d2-4f82-a19f-f8062fe0f2f2","type":"Title"},"toolbar":{"id":"573b329e-afe2-4a62-9e05-ae82bcc6696a","type":"Toolbar"},"x_range":{"id":"6f762390-83f7-48be-b4bf-51b207314d99","type":"DataRange1d"},"x_scale":{"id":"acbe9eb1-961c-4143-b4f3-db57695ff017","type":"LinearScale"},"y_range":{"id":"4580039d-bcb6-43e8-9b29-d46a688ef3eb","type":"DataRange1d"},"y_scale":{"id":"92fee47e-4ee4-448b-a223-153c3613cf88","type":"LinearScale"}},"id":"5d3563b9-2320-4385-b311-0b67a4927682","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"7223add9-7c06-4cc7-828b-dcccee45e321","type":"Circle"}],"root_ids":["5d3563b9-2320-4385-b311-0b67a4927682"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"a3664bb5-50ee-4c42-bf6e-b97b293d2d69","elementid":"160f9239-3869-4589-b7fd-71d7753a44b2","modelid":"5d3563b9-2320-4385-b311-0b67a4927682"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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