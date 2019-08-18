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
      };var element = document.getElementById("fe7bb2b6-f470-409b-9f0e-f694dfcd6c68");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fe7bb2b6-f470-409b-9f0e-f694dfcd6c68' but no matching script tag was found. ")
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
                    var docs_json = {"78453b44-e972-489e-8b05-368c1bd7dd6b":{"roots":{"references":[{"attributes":{"overlay":{"id":"d6610333-ec9c-4a50-b671-b4d605335a00","type":"BoxAnnotation"}},"id":"3503b8fc-7b46-4177-bb5b-e2ebf4be2856","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"ce5841f9-43e5-4a66-9736-fffe0d57325a","type":"BasicTickFormatter"},"plot":{"id":"12dc18c6-9a44-452d-9d6c-217881b1f515","subtype":"Figure","type":"Plot"},"ticker":{"id":"930dcbb9-e4bc-42f3-930d-30479caa290c","type":"BasicTicker"}},"id":"b49de356-0a4c-4404-9db9-974e0ee23a2d","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"d3029cd1-7316-48b1-b82d-6411ebff7bcd","type":"Title"},{"attributes":{},"id":"df80c563-97a7-46c6-b410-143b7dd469aa","type":"LinearScale"},{"attributes":{},"id":"7e1df115-cbb4-4c5b-be57-07f0202d0c4f","type":"SaveTool"},{"attributes":{"callback":null},"id":"0cd03e1d-711e-41b2-bdae-51ca2fbc3201","type":"DataRange1d"},{"attributes":{},"id":"c2a4e840-1935-4910-b8bb-7e431a1e3668","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5d169b99-edec-454e-8b01-e7181bf0b43a","type":"PanTool"},{"id":"f809d4a6-7cba-41f3-8d30-09eb5a698fee","type":"WheelZoomTool"},{"id":"3503b8fc-7b46-4177-bb5b-e2ebf4be2856","type":"BoxZoomTool"},{"id":"7e1df115-cbb4-4c5b-be57-07f0202d0c4f","type":"SaveTool"},{"id":"b889d318-a72f-4f20-b42a-0cb3d34a5410","type":"ResetTool"},{"id":"07ea4dcc-b1ad-49a9-8cde-0f0cbeb0ab40","type":"HelpTool"}]},"id":"7d4971c0-83da-4c0f-bffa-e655093b6d1b","type":"Toolbar"},{"attributes":{"callback":null},"id":"10da6f27-c682-44d5-9aec-c0f47a1a3ce6","type":"DataRange1d"},{"attributes":{},"id":"b14ea671-1f8d-4cf8-96c5-c8d9cf00bb13","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"dc981fd2-11b5-421b-92e5-c17b0660c67e","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"12dc18c6-9a44-452d-9d6c-217881b1f515","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2a4e840-1935-4910-b8bb-7e431a1e3668","type":"BasicTicker"}},"id":"939540c0-e879-41c7-aa5f-851746164d2f","type":"Grid"},{"attributes":{},"id":"ce5841f9-43e5-4a66-9736-fffe0d57325a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"733b4f53-4403-4509-bcd3-9cbf17994ad6","type":"Circle"},{"attributes":{"below":[{"id":"b49de356-0a4c-4404-9db9-974e0ee23a2d","type":"LinearAxis"}],"left":[{"id":"f5c88d67-ad66-4a3f-adcf-fa59b4dc2170","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"b49de356-0a4c-4404-9db9-974e0ee23a2d","type":"LinearAxis"},{"id":"c4b62f1f-c635-4a31-93aa-1941dd342acb","type":"Grid"},{"id":"f5c88d67-ad66-4a3f-adcf-fa59b4dc2170","type":"LinearAxis"},{"id":"939540c0-e879-41c7-aa5f-851746164d2f","type":"Grid"},{"id":"d6610333-ec9c-4a50-b671-b4d605335a00","type":"BoxAnnotation"},{"id":"9f9a75dc-e9fa-43c7-bad0-36cc20f3d027","type":"GlyphRenderer"}],"title":{"id":"d3029cd1-7316-48b1-b82d-6411ebff7bcd","type":"Title"},"toolbar":{"id":"7d4971c0-83da-4c0f-bffa-e655093b6d1b","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"10da6f27-c682-44d5-9aec-c0f47a1a3ce6","type":"DataRange1d"},"x_scale":{"id":"098b68a8-5486-4d97-b203-352f54303a9e","type":"LinearScale"},"y_range":{"id":"0cd03e1d-711e-41b2-bdae-51ca2fbc3201","type":"DataRange1d"},"y_scale":{"id":"df80c563-97a7-46c6-b410-143b7dd469aa","type":"LinearScale"}},"id":"12dc18c6-9a44-452d-9d6c-217881b1f515","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"b14ea671-1f8d-4cf8-96c5-c8d9cf00bb13","type":"BasicTickFormatter"},"plot":{"id":"12dc18c6-9a44-452d-9d6c-217881b1f515","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2a4e840-1935-4910-b8bb-7e431a1e3668","type":"BasicTicker"}},"id":"f5c88d67-ad66-4a3f-adcf-fa59b4dc2170","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"340a08f1-5617-434c-8c7c-0ed84c499945","type":"Circle"},{"attributes":{},"id":"098b68a8-5486-4d97-b203-352f54303a9e","type":"LinearScale"},{"attributes":{"data_source":{"id":"dc981fd2-11b5-421b-92e5-c17b0660c67e","type":"ColumnDataSource"},"glyph":{"id":"340a08f1-5617-434c-8c7c-0ed84c499945","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"733b4f53-4403-4509-bcd3-9cbf17994ad6","type":"Circle"},"selection_glyph":null,"view":{"id":"715ac772-ba05-4797-bd66-cc3cd9981ece","type":"CDSView"}},"id":"9f9a75dc-e9fa-43c7-bad0-36cc20f3d027","type":"GlyphRenderer"},{"attributes":{},"id":"930dcbb9-e4bc-42f3-930d-30479caa290c","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d6610333-ec9c-4a50-b671-b4d605335a00","type":"BoxAnnotation"},{"attributes":{},"id":"b889d318-a72f-4f20-b42a-0cb3d34a5410","type":"ResetTool"},{"attributes":{},"id":"07ea4dcc-b1ad-49a9-8cde-0f0cbeb0ab40","type":"HelpTool"},{"attributes":{},"id":"5d169b99-edec-454e-8b01-e7181bf0b43a","type":"PanTool"},{"attributes":{"plot":{"id":"12dc18c6-9a44-452d-9d6c-217881b1f515","subtype":"Figure","type":"Plot"},"ticker":{"id":"930dcbb9-e4bc-42f3-930d-30479caa290c","type":"BasicTicker"}},"id":"c4b62f1f-c635-4a31-93aa-1941dd342acb","type":"Grid"},{"attributes":{},"id":"f809d4a6-7cba-41f3-8d30-09eb5a698fee","type":"WheelZoomTool"},{"attributes":{"source":{"id":"dc981fd2-11b5-421b-92e5-c17b0660c67e","type":"ColumnDataSource"}},"id":"715ac772-ba05-4797-bd66-cc3cd9981ece","type":"CDSView"}],"root_ids":["12dc18c6-9a44-452d-9d6c-217881b1f515"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"78453b44-e972-489e-8b05-368c1bd7dd6b","elementid":"fe7bb2b6-f470-409b-9f0e-f694dfcd6c68","modelid":"12dc18c6-9a44-452d-9d6c-217881b1f515"}];
                
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
