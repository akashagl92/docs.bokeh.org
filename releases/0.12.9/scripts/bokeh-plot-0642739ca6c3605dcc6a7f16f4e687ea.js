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
      };var element = document.getElementById("7d6eaea6-8d99-45ef-b91c-1b862c7f4eb8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7d6eaea6-8d99-45ef-b91c-1b862c7f4eb8' but no matching script tag was found. ")
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
                    var docs_json = {"446aedbd-376b-4259-bd02-88a0f7f09936":{"roots":{"references":[{"attributes":{},"id":"55f07228-37ce-4886-852a-c1d466cd977d","type":"LinearScale"},{"attributes":{"callback":null},"id":"739c058f-5e9a-4101-8232-db7c4e3eb474","type":"DataRange1d"},{"attributes":{"overlay":{"id":"7caa0e74-c468-4cc4-adfa-fc9cc1d7e792","type":"BoxAnnotation"}},"id":"ebf382c3-81e2-40ce-a06e-571244b87b17","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7487cf2a-531d-4f63-aa86-ba2f8a8d89c7","type":"Circle"},{"attributes":{},"id":"2ee70df5-1572-4daf-afe1-e6b97e7feb7e","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"a13d1a2a-88eb-4dba-8533-0d05c93407c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1a1b16e-77c9-42f3-b93f-d33c0c3cb27e","type":"BasicTicker"}},"id":"aa7c362d-03dc-4902-a30e-e9924d4074d8","type":"Grid"},{"attributes":{"callback":null},"id":"58c57c6f-fc36-4d75-b043-eeb58b3e8744","type":"DataRange1d"},{"attributes":{"source":{"id":"28f66dd4-58f0-4794-8dbd-0a8062422005","type":"ColumnDataSource"}},"id":"d1d28f0e-d04d-4bd0-8c93-fae54ebd8fac","type":"CDSView"},{"attributes":{},"id":"1f1254c8-0917-43b7-b54a-30f2bf6543d1","type":"BasicTickFormatter"},{"attributes":{},"id":"147cb53e-394e-4ca6-851e-076518db153d","type":"LinearScale"},{"attributes":{"bounds":[2,4],"formatter":{"id":"4c5010ab-5c22-41c4-8d8c-80480f96f534","type":"BasicTickFormatter"},"plot":{"id":"a13d1a2a-88eb-4dba-8533-0d05c93407c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"56c06953-fca7-4f0a-8e6e-abd44ecd6560","type":"BasicTicker"}},"id":"ba005aed-4b52-4228-8080-1833d3d84a41","type":"LinearAxis"},{"attributes":{},"id":"56c06953-fca7-4f0a-8e6e-abd44ecd6560","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7caa0e74-c468-4cc4-adfa-fc9cc1d7e792","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c104fdf3-118c-4fae-8c4e-f0195cd9df0a","type":"Circle"},{"attributes":{"formatter":{"id":"1f1254c8-0917-43b7-b54a-30f2bf6543d1","type":"BasicTickFormatter"},"plot":{"id":"a13d1a2a-88eb-4dba-8533-0d05c93407c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1a1b16e-77c9-42f3-b93f-d33c0c3cb27e","type":"BasicTicker"}},"id":"91252e50-0652-4644-9ec2-494d1f1bce25","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"49713f70-84bd-4eff-b076-ba411873977b","type":"Title"},{"attributes":{},"id":"b1a1b16e-77c9-42f3-b93f-d33c0c3cb27e","type":"BasicTicker"},{"attributes":{"plot":{"id":"a13d1a2a-88eb-4dba-8533-0d05c93407c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"56c06953-fca7-4f0a-8e6e-abd44ecd6560","type":"BasicTicker"}},"id":"e0aab33d-1047-4b98-952c-1af42432e8e2","type":"Grid"},{"attributes":{},"id":"4c5010ab-5c22-41c4-8d8c-80480f96f534","type":"BasicTickFormatter"},{"attributes":{},"id":"3271110e-ddee-4936-99c0-ecb9f39e44b9","type":"WheelZoomTool"},{"attributes":{},"id":"ba7af150-7ceb-4080-9928-1885a9b0a939","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"28f66dd4-58f0-4794-8dbd-0a8062422005","type":"ColumnDataSource"},{"attributes":{},"id":"f2d71f36-2b5e-44f4-93ae-5cd7912dd9c0","type":"SaveTool"},{"attributes":{},"id":"77085f18-1658-41fe-b609-f851bce4e611","type":"HelpTool"},{"attributes":{"data_source":{"id":"28f66dd4-58f0-4794-8dbd-0a8062422005","type":"ColumnDataSource"},"glyph":{"id":"7487cf2a-531d-4f63-aa86-ba2f8a8d89c7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c104fdf3-118c-4fae-8c4e-f0195cd9df0a","type":"Circle"},"selection_glyph":null,"view":{"id":"d1d28f0e-d04d-4bd0-8c93-fae54ebd8fac","type":"CDSView"}},"id":"49404782-8d16-4a72-9047-1ecf8799b2a0","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"ba005aed-4b52-4228-8080-1833d3d84a41","type":"LinearAxis"}],"left":[{"id":"91252e50-0652-4644-9ec2-494d1f1bce25","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ba005aed-4b52-4228-8080-1833d3d84a41","type":"LinearAxis"},{"id":"e0aab33d-1047-4b98-952c-1af42432e8e2","type":"Grid"},{"id":"91252e50-0652-4644-9ec2-494d1f1bce25","type":"LinearAxis"},{"id":"aa7c362d-03dc-4902-a30e-e9924d4074d8","type":"Grid"},{"id":"7caa0e74-c468-4cc4-adfa-fc9cc1d7e792","type":"BoxAnnotation"},{"id":"49404782-8d16-4a72-9047-1ecf8799b2a0","type":"GlyphRenderer"}],"title":{"id":"49713f70-84bd-4eff-b076-ba411873977b","type":"Title"},"toolbar":{"id":"d6816a1f-cbe5-4514-9ebf-2989541cf8d2","type":"Toolbar"},"x_range":{"id":"739c058f-5e9a-4101-8232-db7c4e3eb474","type":"DataRange1d"},"x_scale":{"id":"55f07228-37ce-4886-852a-c1d466cd977d","type":"LinearScale"},"y_range":{"id":"58c57c6f-fc36-4d75-b043-eeb58b3e8744","type":"DataRange1d"},"y_scale":{"id":"147cb53e-394e-4ca6-851e-076518db153d","type":"LinearScale"}},"id":"a13d1a2a-88eb-4dba-8533-0d05c93407c3","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2ee70df5-1572-4daf-afe1-e6b97e7feb7e","type":"PanTool"},{"id":"3271110e-ddee-4936-99c0-ecb9f39e44b9","type":"WheelZoomTool"},{"id":"ebf382c3-81e2-40ce-a06e-571244b87b17","type":"BoxZoomTool"},{"id":"f2d71f36-2b5e-44f4-93ae-5cd7912dd9c0","type":"SaveTool"},{"id":"ba7af150-7ceb-4080-9928-1885a9b0a939","type":"ResetTool"},{"id":"77085f18-1658-41fe-b609-f851bce4e611","type":"HelpTool"}]},"id":"d6816a1f-cbe5-4514-9ebf-2989541cf8d2","type":"Toolbar"}],"root_ids":["a13d1a2a-88eb-4dba-8533-0d05c93407c3"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"446aedbd-376b-4259-bd02-88a0f7f09936","elementid":"7d6eaea6-8d99-45ef-b91c-1b862c7f4eb8","modelid":"a13d1a2a-88eb-4dba-8533-0d05c93407c3"}];
                
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
