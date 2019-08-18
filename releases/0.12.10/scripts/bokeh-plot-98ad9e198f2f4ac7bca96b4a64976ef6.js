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
      };var element = document.getElementById("ac43a3fc-2916-4498-8e46-f4c6ec214d74");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac43a3fc-2916-4498-8e46-f4c6ec214d74' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"b97eb340-0404-46d4-96de-7b587f18623c":{"roots":{"references":[{"attributes":{"formatter":{"id":"bc892718-eb64-4145-b4b7-d96ecc1f705c","type":"BasicTickFormatter"},"plot":{"id":"f8f956be-77d5-4642-b23f-e5cf1766cb0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6538f69c-b48f-490e-bb9a-b5fcce7ffb1c","type":"BasicTicker"}},"id":"662cdf27-9213-4284-8be2-48dcf1d409b2","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"9f967e66-5bcc-4c05-abbc-0ce4f007d314","type":"Title"},{"attributes":{},"id":"bfacbb2b-4c6b-4c0d-9b1c-297906962b2e","type":"WheelZoomTool"},{"attributes":{},"id":"c620a8dd-62d3-4c46-be94-6f37e5255c1d","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37ec5d8e-1982-4e24-8d42-a294e3b928ee","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"277379f9-1126-4693-a33b-9dcbd207ae7a","type":"PanTool"},{"id":"bfacbb2b-4c6b-4c0d-9b1c-297906962b2e","type":"WheelZoomTool"},{"id":"ee3894ad-178c-436a-a2ee-ff53bd296f33","type":"BoxZoomTool"},{"id":"fe89addb-35ab-46ad-9749-7b6cbb679b58","type":"SaveTool"},{"id":"c620a8dd-62d3-4c46-be94-6f37e5255c1d","type":"ResetTool"},{"id":"28dc6811-43b4-4dab-990a-10f07e12bca3","type":"HelpTool"}]},"id":"d5fe8ca9-ce32-43d0-bdc2-eba644a2b39e","type":"Toolbar"},{"attributes":{},"id":"44aaa4aa-465a-438e-8590-571540b31ab8","type":"LinearScale"},{"attributes":{},"id":"f5eecad8-692e-406a-815e-5ef68ae5f788","type":"LinearScale"},{"attributes":{},"id":"fe89addb-35ab-46ad-9749-7b6cbb679b58","type":"SaveTool"},{"attributes":{"data_source":{"id":"0095f943-7496-49a5-b148-69dcf6552a0b","type":"ColumnDataSource"},"glyph":{"id":"a651965b-1ffe-4459-bc69-a2cee06a75eb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37ec5d8e-1982-4e24-8d42-a294e3b928ee","type":"Circle"},"selection_glyph":null,"view":{"id":"79032237-5a2c-4bc5-ab55-26f181d976e0","type":"CDSView"}},"id":"ff9fdb21-737c-4ca0-9310-5b43a445cd33","type":"GlyphRenderer"},{"attributes":{},"id":"43424b68-2f80-4404-b702-79ac7cde329c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a651965b-1ffe-4459-bc69-a2cee06a75eb","type":"Circle"},{"attributes":{},"id":"277379f9-1126-4693-a33b-9dcbd207ae7a","type":"PanTool"},{"attributes":{},"id":"bc892718-eb64-4145-b4b7-d96ecc1f705c","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf0caad6-bf05-495d-ab40-94d32b9614e6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f8f956be-77d5-4642-b23f-e5cf1766cb0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"cea2fc13-6610-4eb1-aeee-2c55bcbfd90b","type":"BasicTicker"}},"id":"d747fc3d-135a-4589-9886-81c40e8f22a6","type":"Grid"},{"attributes":{},"id":"6538f69c-b48f-490e-bb9a-b5fcce7ffb1c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18c932e5-6ffd-4eeb-a3d7-a9f1c2f687c2","type":"DataRange1d"},{"attributes":{"below":[{"id":"0024234c-5df8-44bf-9708-fd6f2dc0f7e2","type":"LinearAxis"}],"left":[{"id":"662cdf27-9213-4284-8be2-48dcf1d409b2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0024234c-5df8-44bf-9708-fd6f2dc0f7e2","type":"LinearAxis"},{"id":"d747fc3d-135a-4589-9886-81c40e8f22a6","type":"Grid"},{"id":"662cdf27-9213-4284-8be2-48dcf1d409b2","type":"LinearAxis"},{"id":"a1cf5a63-77bb-410e-b00f-bead407d3c63","type":"Grid"},{"id":"cf0caad6-bf05-495d-ab40-94d32b9614e6","type":"BoxAnnotation"},{"id":"ff9fdb21-737c-4ca0-9310-5b43a445cd33","type":"GlyphRenderer"}],"title":{"id":"9f967e66-5bcc-4c05-abbc-0ce4f007d314","type":"Title"},"toolbar":{"id":"d5fe8ca9-ce32-43d0-bdc2-eba644a2b39e","type":"Toolbar"},"x_range":{"id":"6510b751-cc2f-4739-9ad8-e2a61126829d","type":"DataRange1d"},"x_scale":{"id":"44aaa4aa-465a-438e-8590-571540b31ab8","type":"LinearScale"},"y_range":{"id":"18c932e5-6ffd-4eeb-a3d7-a9f1c2f687c2","type":"DataRange1d"},"y_scale":{"id":"f5eecad8-692e-406a-815e-5ef68ae5f788","type":"LinearScale"}},"id":"f8f956be-77d5-4642-b23f-e5cf1766cb0b","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"0095f943-7496-49a5-b148-69dcf6552a0b","type":"ColumnDataSource"}},"id":"79032237-5a2c-4bc5-ab55-26f181d976e0","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0095f943-7496-49a5-b148-69dcf6552a0b","type":"ColumnDataSource"},{"attributes":{},"id":"cea2fc13-6610-4eb1-aeee-2c55bcbfd90b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6510b751-cc2f-4739-9ad8-e2a61126829d","type":"DataRange1d"},{"attributes":{"bounds":[2,4],"formatter":{"id":"43424b68-2f80-4404-b702-79ac7cde329c","type":"BasicTickFormatter"},"plot":{"id":"f8f956be-77d5-4642-b23f-e5cf1766cb0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"cea2fc13-6610-4eb1-aeee-2c55bcbfd90b","type":"BasicTicker"}},"id":"0024234c-5df8-44bf-9708-fd6f2dc0f7e2","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"f8f956be-77d5-4642-b23f-e5cf1766cb0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6538f69c-b48f-490e-bb9a-b5fcce7ffb1c","type":"BasicTicker"}},"id":"a1cf5a63-77bb-410e-b00f-bead407d3c63","type":"Grid"},{"attributes":{},"id":"28dc6811-43b4-4dab-990a-10f07e12bca3","type":"HelpTool"},{"attributes":{"overlay":{"id":"cf0caad6-bf05-495d-ab40-94d32b9614e6","type":"BoxAnnotation"}},"id":"ee3894ad-178c-436a-a2ee-ff53bd296f33","type":"BoxZoomTool"}],"root_ids":["f8f956be-77d5-4642-b23f-e5cf1766cb0b"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"b97eb340-0404-46d4-96de-7b587f18623c","elementid":"ac43a3fc-2916-4498-8e46-f4c6ec214d74","modelid":"f8f956be-77d5-4642-b23f-e5cf1766cb0b"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
