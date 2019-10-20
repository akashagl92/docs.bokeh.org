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
      };var element = document.getElementById("8d67edf2-e503-4b58-af93-4a6b872ce3eb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d67edf2-e503-4b58-af93-4a6b872ce3eb' but no matching script tag was found. ")
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
                    var docs_json = {"473b1015-4a6d-48c6-be0d-f5460c84801d":{"roots":{"references":[{"attributes":{},"id":"cf30ec39-9784-401d-af16-61e3c6e1f5b8","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"787214b4-415d-462e-b740-72765a0fbd93","type":"BoxAnnotation"}},"id":"9515aebe-dd27-4906-be7c-abcf16a2e25d","type":"BoxZoomTool"},{"attributes":{},"id":"8bb2613d-0336-490c-8a82-0a8063dd7713","type":"SaveTool"},{"attributes":{"plot":{"id":"7852bd01-a4b6-455c-a18d-13740a7f5345","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8aa86b1-3412-44b3-80ff-12b7900496b2","type":"BasicTicker"}},"id":"401e3627-5981-4e0b-9058-55cc33fe4cb0","type":"Grid"},{"attributes":{},"id":"d8aa86b1-3412-44b3-80ff-12b7900496b2","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"8dbe656c-fa3e-4698-bab5-ef23277d76b2","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"22e15553-91bd-4653-a7dd-326db1bc1d5c","type":"Circle"},{"attributes":{},"id":"6c880346-0adc-4454-bf35-1193a1ffc44f","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"787214b4-415d-462e-b740-72765a0fbd93","type":"BoxAnnotation"},{"attributes":{},"id":"96e01184-c22f-4197-8a40-4d3efa5e99c5","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9492f476-99d9-439d-9288-9deca1313ad4","type":"Circle"},{"attributes":{"formatter":{"id":"3bb62a18-60bc-46bb-99dc-3cedbac04bba","type":"BasicTickFormatter"},"plot":{"id":"7852bd01-a4b6-455c-a18d-13740a7f5345","subtype":"Figure","type":"Plot"},"ticker":{"id":"221c9ab5-90ff-491a-bd0c-b5b317bd38cb","type":"BasicTicker"}},"id":"d3ca0b0b-fa2e-423d-b95a-2ffe8f8d1a76","type":"LinearAxis"},{"attributes":{},"id":"9ac3208d-7f57-4c39-8996-d9b0a599c990","type":"PanTool"},{"attributes":{},"id":"c8b18807-1409-46ea-b71b-89a296273cc9","type":"HelpTool"},{"attributes":{"source":{"id":"8dbe656c-fa3e-4698-bab5-ef23277d76b2","type":"ColumnDataSource"}},"id":"5a564f85-baa3-4d16-8f0f-b228f36ede49","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ac3208d-7f57-4c39-8996-d9b0a599c990","type":"PanTool"},{"id":"a146095d-b16b-4a05-9a5d-0534822a99ac","type":"WheelZoomTool"},{"id":"9515aebe-dd27-4906-be7c-abcf16a2e25d","type":"BoxZoomTool"},{"id":"8bb2613d-0336-490c-8a82-0a8063dd7713","type":"SaveTool"},{"id":"6c880346-0adc-4454-bf35-1193a1ffc44f","type":"ResetTool"},{"id":"c8b18807-1409-46ea-b71b-89a296273cc9","type":"HelpTool"}]},"id":"0c616236-2ee7-4f6c-ab37-c2d537d06676","type":"Toolbar"},{"attributes":{"callback":null},"id":"c5fe0aef-63b7-42a7-86a9-9b651eaf7d99","type":"DataRange1d"},{"attributes":{"below":[{"id":"fbfdb026-5308-4279-b886-ffe51f72f445","type":"LinearAxis"}],"left":[{"id":"d3ca0b0b-fa2e-423d-b95a-2ffe8f8d1a76","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fbfdb026-5308-4279-b886-ffe51f72f445","type":"LinearAxis"},{"id":"401e3627-5981-4e0b-9058-55cc33fe4cb0","type":"Grid"},{"id":"d3ca0b0b-fa2e-423d-b95a-2ffe8f8d1a76","type":"LinearAxis"},{"id":"42d2b002-f7aa-44ac-ab25-6e11426c5754","type":"Grid"},{"id":"787214b4-415d-462e-b740-72765a0fbd93","type":"BoxAnnotation"},{"id":"c46fc19b-3a2e-45fa-9a43-534009145cca","type":"GlyphRenderer"}],"title":{"id":"b1c12226-eef7-4e40-b551-1ea287c04efd","type":"Title"},"toolbar":{"id":"0c616236-2ee7-4f6c-ab37-c2d537d06676","type":"Toolbar"},"x_range":{"id":"6f6402ef-8c19-4e98-a60f-e19772d3d572","type":"DataRange1d"},"x_scale":{"id":"abfeb2b5-191d-4230-b501-fad2200c63c8","type":"LinearScale"},"y_range":{"id":"c5fe0aef-63b7-42a7-86a9-9b651eaf7d99","type":"DataRange1d"},"y_scale":{"id":"96e01184-c22f-4197-8a40-4d3efa5e99c5","type":"LinearScale"}},"id":"7852bd01-a4b6-455c-a18d-13740a7f5345","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"abfeb2b5-191d-4230-b501-fad2200c63c8","type":"LinearScale"},{"attributes":{"callback":null},"id":"6f6402ef-8c19-4e98-a60f-e19772d3d572","type":"DataRange1d"},{"attributes":{},"id":"221c9ab5-90ff-491a-bd0c-b5b317bd38cb","type":"BasicTicker"},{"attributes":{},"id":"3bb62a18-60bc-46bb-99dc-3cedbac04bba","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"b1c12226-eef7-4e40-b551-1ea287c04efd","type":"Title"},{"attributes":{"formatter":{"id":"cf30ec39-9784-401d-af16-61e3c6e1f5b8","type":"BasicTickFormatter"},"plot":{"id":"7852bd01-a4b6-455c-a18d-13740a7f5345","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8aa86b1-3412-44b3-80ff-12b7900496b2","type":"BasicTicker"}},"id":"fbfdb026-5308-4279-b886-ffe51f72f445","type":"LinearAxis"},{"attributes":{},"id":"a146095d-b16b-4a05-9a5d-0534822a99ac","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7852bd01-a4b6-455c-a18d-13740a7f5345","subtype":"Figure","type":"Plot"},"ticker":{"id":"221c9ab5-90ff-491a-bd0c-b5b317bd38cb","type":"BasicTicker"}},"id":"42d2b002-f7aa-44ac-ab25-6e11426c5754","type":"Grid"},{"attributes":{"data_source":{"id":"8dbe656c-fa3e-4698-bab5-ef23277d76b2","type":"ColumnDataSource"},"glyph":{"id":"9492f476-99d9-439d-9288-9deca1313ad4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22e15553-91bd-4653-a7dd-326db1bc1d5c","type":"Circle"},"selection_glyph":null,"view":{"id":"5a564f85-baa3-4d16-8f0f-b228f36ede49","type":"CDSView"}},"id":"c46fc19b-3a2e-45fa-9a43-534009145cca","type":"GlyphRenderer"}],"root_ids":["7852bd01-a4b6-455c-a18d-13740a7f5345"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"473b1015-4a6d-48c6-be0d-f5460c84801d","elementid":"8d67edf2-e503-4b58-af93-4a6b872ce3eb","modelid":"7852bd01-a4b6-455c-a18d-13740a7f5345"}];
                
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
