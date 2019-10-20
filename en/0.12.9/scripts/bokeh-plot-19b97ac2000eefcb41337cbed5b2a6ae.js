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
      };var element = document.getElementById("21295dec-3f35-467b-9186-ae6a555eb30a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '21295dec-3f35-467b-9186-ae6a555eb30a' but no matching script tag was found. ")
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
                    var docs_json = {"e13e0b65-f118-4f15-898a-44660b815766":{"roots":{"references":[{"attributes":{"formatter":{"id":"4bf164e4-f493-46cf-94ed-6e2b2b06ef33","type":"BasicTickFormatter"},"plot":{"id":"aa410e08-6d2b-4ef2-93e4-faf962853c9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"720506fa-bff2-4cee-acb8-89c3b5873587","type":"BasicTicker"}},"id":"9889eee8-5b61-47d0-be70-78bc7fe6b76f","type":"LinearAxis"},{"attributes":{},"id":"5b7175b9-e7e1-48f1-a524-e2d73b54e989","type":"BasicTickFormatter"},{"attributes":{},"id":"c467997e-fe45-4431-922c-93eeba4ce3a1","type":"BasicTicker"},{"attributes":{},"id":"720506fa-bff2-4cee-acb8-89c3b5873587","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5b7175b9-e7e1-48f1-a524-e2d73b54e989","type":"BasicTickFormatter"},"plot":{"id":"aa410e08-6d2b-4ef2-93e4-faf962853c9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c467997e-fe45-4431-922c-93eeba4ce3a1","type":"BasicTicker"}},"id":"3fc18a1f-8507-4e9d-a1cc-e7e0aaf05cf2","type":"LinearAxis"},{"attributes":{},"id":"b21af99f-1bfc-468a-9eba-54fb362c7df4","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]}},"id":"5e2458b7-b57c-460d-910e-dc858d03c12d","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"9ff9ee8f-1afe-40ce-8e52-be9bc9411224","type":"Title"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6848912-3d6e-426d-97e2-6f9d4e84dd17","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"281b619b-92db-467b-bce4-d6770d4e7488","type":"BoxAnnotation"},{"attributes":{},"id":"4bf164e4-f493-46cf-94ed-6e2b2b06ef33","type":"BasicTickFormatter"},{"attributes":{},"id":"278902f9-e1f6-415f-8c4b-dfa7eef8c46f","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"9889eee8-5b61-47d0-be70-78bc7fe6b76f","type":"LinearAxis"}],"left":[{"id":"3fc18a1f-8507-4e9d-a1cc-e7e0aaf05cf2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9889eee8-5b61-47d0-be70-78bc7fe6b76f","type":"LinearAxis"},{"id":"9f5c06d2-0ec5-41cc-8dff-bd9200a1882e","type":"Grid"},{"id":"3fc18a1f-8507-4e9d-a1cc-e7e0aaf05cf2","type":"LinearAxis"},{"id":"8818a1a9-125e-4981-977c-2f4559888638","type":"Grid"},{"id":"281b619b-92db-467b-bce4-d6770d4e7488","type":"BoxAnnotation"},{"id":"66cfdeec-cc1f-49cf-822c-55b6984866b1","type":"GlyphRenderer"}],"title":{"id":"9ff9ee8f-1afe-40ce-8e52-be9bc9411224","type":"Title"},"toolbar":{"id":"7641d8e9-4f12-48e9-a681-223c2406f2e1","type":"Toolbar"},"x_range":{"id":"56909b45-8e4b-4a97-85b2-d9b189118e65","type":"DataRange1d"},"x_scale":{"id":"2019d52b-3ac2-4817-8655-5e62c94ec02b","type":"LinearScale"},"y_range":{"id":"833ab54f-7009-4e4a-85b2-5ecc79b13064","type":"DataRange1d"},"y_scale":{"id":"0f9ab7af-6180-4476-a351-29b314d8d2ac","type":"LinearScale"}},"id":"aa410e08-6d2b-4ef2-93e4-faf962853c9e","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"5e2458b7-b57c-460d-910e-dc858d03c12d","type":"ColumnDataSource"}},"id":"1eb39a04-8bc0-4e4b-92f4-50fd6476087a","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d81a6fad-764c-41e2-a430-0ec58ef4ba8a","type":"PanTool"},{"id":"278902f9-e1f6-415f-8c4b-dfa7eef8c46f","type":"WheelZoomTool"},{"id":"e76d72aa-75fa-43f7-ae24-8ab4c8b01611","type":"BoxZoomTool"},{"id":"b21af99f-1bfc-468a-9eba-54fb362c7df4","type":"SaveTool"},{"id":"68e5e611-df53-4c11-893d-6119aa4c0168","type":"ResetTool"},{"id":"5bc75204-fa02-43ce-8f1e-7fc1d2ed84c6","type":"HelpTool"}]},"id":"7641d8e9-4f12-48e9-a681-223c2406f2e1","type":"Toolbar"},{"attributes":{"callback":null},"id":"56909b45-8e4b-4a97-85b2-d9b189118e65","type":"DataRange1d"},{"attributes":{},"id":"5bc75204-fa02-43ce-8f1e-7fc1d2ed84c6","type":"HelpTool"},{"attributes":{"overlay":{"id":"281b619b-92db-467b-bce4-d6770d4e7488","type":"BoxAnnotation"}},"id":"e76d72aa-75fa-43f7-ae24-8ab4c8b01611","type":"BoxZoomTool"},{"attributes":{},"id":"0f9ab7af-6180-4476-a351-29b314d8d2ac","type":"LinearScale"},{"attributes":{},"id":"d81a6fad-764c-41e2-a430-0ec58ef4ba8a","type":"PanTool"},{"attributes":{},"id":"68e5e611-df53-4c11-893d-6119aa4c0168","type":"ResetTool"},{"attributes":{},"id":"2019d52b-3ac2-4817-8655-5e62c94ec02b","type":"LinearScale"},{"attributes":{"callback":null},"id":"833ab54f-7009-4e4a-85b2-5ecc79b13064","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5e2458b7-b57c-460d-910e-dc858d03c12d","type":"ColumnDataSource"},"glyph":{"id":"e6848912-3d6e-426d-97e2-6f9d4e84dd17","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ac43aea1-4359-4b81-9887-a61cfd23a955","type":"Line"},"selection_glyph":null,"view":{"id":"1eb39a04-8bc0-4e4b-92f4-50fd6476087a","type":"CDSView"}},"id":"66cfdeec-cc1f-49cf-822c-55b6984866b1","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"aa410e08-6d2b-4ef2-93e4-faf962853c9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c467997e-fe45-4431-922c-93eeba4ce3a1","type":"BasicTicker"}},"id":"8818a1a9-125e-4981-977c-2f4559888638","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac43aea1-4359-4b81-9887-a61cfd23a955","type":"Line"},{"attributes":{"plot":{"id":"aa410e08-6d2b-4ef2-93e4-faf962853c9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"720506fa-bff2-4cee-acb8-89c3b5873587","type":"BasicTicker"}},"id":"9f5c06d2-0ec5-41cc-8dff-bd9200a1882e","type":"Grid"}],"root_ids":["aa410e08-6d2b-4ef2-93e4-faf962853c9e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e13e0b65-f118-4f15-898a-44660b815766","elementid":"21295dec-3f35-467b-9186-ae6a555eb30a","modelid":"aa410e08-6d2b-4ef2-93e4-faf962853c9e"}];
                
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
