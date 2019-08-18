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
      };var element = document.getElementById("db1e0363-b5e9-4b4e-a6eb-7b0de9a5fb67");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'db1e0363-b5e9-4b4e-a6eb-7b0de9a5fb67' but no matching script tag was found. ")
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
                    var docs_json = {"dae623d9-e4d4-45c2-8dd9-df9433e87e33":{"roots":{"references":[{"attributes":{"source":{"id":"6fafff7f-12df-4902-9439-7c9b737a3659","type":"ColumnDataSource"}},"id":"477f2b50-eda0-4ee0-8704-38f359db6bed","type":"CDSView"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f81bf1a-d2b6-4f66-a2a6-e394dddde3e1","type":"Annulus"},{"attributes":{},"id":"786a0053-9525-4bbc-836d-601e6e2890cb","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4481230b-e49a-4402-a8ab-cf4d0264cb9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"786a0053-9525-4bbc-836d-601e6e2890cb","type":"BasicTicker"}},"id":"511c08a6-6111-4ee2-94fe-1649a5620235","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"6fafff7f-12df-4902-9439-7c9b737a3659","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1d167efe-b826-4073-a528-655910f6fbf3","type":"PanTool"},{"id":"64ed2721-8d74-4a5e-a57d-f13d4d64de9b","type":"WheelZoomTool"},{"id":"4df3bc21-6cdb-4e62-ba6e-46a1a49803f5","type":"BoxZoomTool"},{"id":"333cf68d-447b-4945-82e7-c6f5319e03f4","type":"SaveTool"},{"id":"4974c6ad-ba63-4367-a353-0db2983cf6c5","type":"ResetTool"},{"id":"7fb7d102-ab74-4380-89e3-4a9bcd21828a","type":"HelpTool"}]},"id":"a3036dd1-3dcd-417e-afba-2c9cc295067b","type":"Toolbar"},{"attributes":{"data_source":{"id":"6fafff7f-12df-4902-9439-7c9b737a3659","type":"ColumnDataSource"},"glyph":{"id":"1f81bf1a-d2b6-4f66-a2a6-e394dddde3e1","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74ec29ca-3529-4a5e-97b9-e73da62e7ebc","type":"Annulus"},"selection_glyph":null,"view":{"id":"477f2b50-eda0-4ee0-8704-38f359db6bed","type":"CDSView"}},"id":"3d7011ec-13af-4688-a849-12e5d3998438","type":"GlyphRenderer"},{"attributes":{},"id":"17407e8e-ede1-4d0f-b00d-5a076f7e560b","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"028ecaad-91f6-4d7d-8d22-6ae1fa9e6247","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"eb0289c5-0580-496b-9367-05771b07b38e","type":"LinearAxis"}],"left":[{"id":"67767fe8-adbc-44b0-9463-ca83c6f0423f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"eb0289c5-0580-496b-9367-05771b07b38e","type":"LinearAxis"},{"id":"9fdeb376-ecf2-419d-a1f2-1eea352b5ed5","type":"Grid"},{"id":"67767fe8-adbc-44b0-9463-ca83c6f0423f","type":"LinearAxis"},{"id":"511c08a6-6111-4ee2-94fe-1649a5620235","type":"Grid"},{"id":"028ecaad-91f6-4d7d-8d22-6ae1fa9e6247","type":"BoxAnnotation"},{"id":"3d7011ec-13af-4688-a849-12e5d3998438","type":"GlyphRenderer"}],"title":{"id":"97403111-bd6b-4fca-babc-61e1ba592bec","type":"Title"},"toolbar":{"id":"a3036dd1-3dcd-417e-afba-2c9cc295067b","type":"Toolbar"},"x_range":{"id":"462725a6-e0a7-4d9b-a2a6-13d08d26c891","type":"DataRange1d"},"x_scale":{"id":"cdf61e19-632b-4854-b2f4-30846cf4535d","type":"LinearScale"},"y_range":{"id":"49c0ebfc-3914-44ff-8a12-63cb9e564cd4","type":"DataRange1d"},"y_scale":{"id":"1ba7f97d-d6a6-446b-8181-6402d17f587c","type":"LinearScale"}},"id":"4481230b-e49a-4402-a8ab-cf4d0264cb9e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1d167efe-b826-4073-a528-655910f6fbf3","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"97403111-bd6b-4fca-babc-61e1ba592bec","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"74ec29ca-3529-4a5e-97b9-e73da62e7ebc","type":"Annulus"},{"attributes":{"formatter":{"id":"49bd4bec-c0e0-4ede-82de-37f74cc76a3a","type":"BasicTickFormatter"},"plot":{"id":"4481230b-e49a-4402-a8ab-cf4d0264cb9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"786a0053-9525-4bbc-836d-601e6e2890cb","type":"BasicTicker"}},"id":"67767fe8-adbc-44b0-9463-ca83c6f0423f","type":"LinearAxis"},{"attributes":{},"id":"49bd4bec-c0e0-4ede-82de-37f74cc76a3a","type":"BasicTickFormatter"},{"attributes":{},"id":"64ed2721-8d74-4a5e-a57d-f13d4d64de9b","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"028ecaad-91f6-4d7d-8d22-6ae1fa9e6247","type":"BoxAnnotation"}},"id":"4df3bc21-6cdb-4e62-ba6e-46a1a49803f5","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"462725a6-e0a7-4d9b-a2a6-13d08d26c891","type":"DataRange1d"},{"attributes":{},"id":"333cf68d-447b-4945-82e7-c6f5319e03f4","type":"SaveTool"},{"attributes":{"plot":{"id":"4481230b-e49a-4402-a8ab-cf4d0264cb9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7cad7f1-f5f8-4f5e-a2e6-001f776740a2","type":"BasicTicker"}},"id":"9fdeb376-ecf2-419d-a1f2-1eea352b5ed5","type":"Grid"},{"attributes":{},"id":"4974c6ad-ba63-4367-a353-0db2983cf6c5","type":"ResetTool"},{"attributes":{"formatter":{"id":"17407e8e-ede1-4d0f-b00d-5a076f7e560b","type":"BasicTickFormatter"},"plot":{"id":"4481230b-e49a-4402-a8ab-cf4d0264cb9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7cad7f1-f5f8-4f5e-a2e6-001f776740a2","type":"BasicTicker"}},"id":"eb0289c5-0580-496b-9367-05771b07b38e","type":"LinearAxis"},{"attributes":{},"id":"7fb7d102-ab74-4380-89e3-4a9bcd21828a","type":"HelpTool"},{"attributes":{"callback":null},"id":"49c0ebfc-3914-44ff-8a12-63cb9e564cd4","type":"DataRange1d"},{"attributes":{},"id":"a7cad7f1-f5f8-4f5e-a2e6-001f776740a2","type":"BasicTicker"},{"attributes":{},"id":"cdf61e19-632b-4854-b2f4-30846cf4535d","type":"LinearScale"},{"attributes":{},"id":"1ba7f97d-d6a6-446b-8181-6402d17f587c","type":"LinearScale"}],"root_ids":["4481230b-e49a-4402-a8ab-cf4d0264cb9e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"dae623d9-e4d4-45c2-8dd9-df9433e87e33","elementid":"db1e0363-b5e9-4b4e-a6eb-7b0de9a5fb67","modelid":"4481230b-e49a-4402-a8ab-cf4d0264cb9e"}];
                
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
