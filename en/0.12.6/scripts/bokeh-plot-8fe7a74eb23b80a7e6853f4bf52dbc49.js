(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("1d675eb0-870e-4fa7-a44c-d5d8bfa6c3ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d675eb0-870e-4fa7-a44c-d5d8bfa6c3ec' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"f7d2f9f8-b0e2-4b5e-ba96-03e1c842fbfa":{"roots":{"references":[{"attributes":{},"id":"3700ebb5-e291-4e8c-98fb-9b391570de53","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bff69b71-75d5-4176-9d61-0fbd88b38e99","type":"BasicTicker"}},"id":"c0d60b1a-ac27-4c6c-b07c-d46ac2ef938a","type":"Grid"},{"attributes":{"formatter":{"id":"6addb6d2-355b-4f04-80eb-7b4c31dee3a2","type":"BasicTickFormatter"},"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bff69b71-75d5-4176-9d61-0fbd88b38e99","type":"BasicTicker"}},"id":"09cc03bd-6d43-4e8c-9f53-b8d4f240b52d","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5f1b06fe-6dee-49bb-8966-aecb7cb16286","type":"PanTool"},{"id":"dd29ae21-5743-4470-afec-582a36d5f739","type":"WheelZoomTool"},{"id":"f9c0d7ff-78cc-4643-85cb-0fabe1e68aeb","type":"BoxZoomTool"},{"id":"9e744980-5d55-4d1b-8b1d-327045794704","type":"SaveTool"},{"id":"04e6b942-6d09-4874-8297-afcbf58a221e","type":"ResetTool"},{"id":"f7832b91-39cd-4fa7-9db4-a80219625b43","type":"HelpTool"}]},"id":"7bb665f7-f4c5-49c5-a780-c07611ec0f84","type":"Toolbar"},{"attributes":{},"id":"188a099f-4c1d-430c-a2a7-68e1fa76308a","type":"LinearScale"},{"attributes":{"overlay":{"id":"721cbfc2-52d2-4f40-8b76-4a132a1238fd","type":"BoxAnnotation"},"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"}},"id":"f9c0d7ff-78cc-4643-85cb-0fabe1e68aeb","type":"BoxZoomTool"},{"attributes":{},"id":"8f87669f-5f2c-4ebf-a438-4c27f7407ab2","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d24ac115-0e81-42ba-b80c-dec7a7419fed","type":"Square"},{"attributes":{"callback":null},"id":"122e3a90-152d-45f7-957b-14b164ae1a84","type":"DataRange1d"},{"attributes":{"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2420c74-2703-42e0-949a-6767da1a845f","type":"BasicTicker"}},"id":"2cce708b-0c36-44e9-9400-e7c0a5eaba17","type":"Grid"},{"attributes":{},"id":"bff69b71-75d5-4176-9d61-0fbd88b38e99","type":"BasicTicker"},{"attributes":{},"id":"72979c15-6075-48b9-a1ed-605cf716cbdf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"}},"id":"f7832b91-39cd-4fa7-9db4-a80219625b43","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"e1507c92-1660-450e-8fe0-258cfe429344","type":"Title"},{"attributes":{"data_source":{"id":"c4cbde4c-5a80-4d41-aa51-1891fca9a2e0","type":"ColumnDataSource"},"glyph":{"id":"3bcf0bcc-0501-4c80-970d-f676c527e9a2","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d24ac115-0e81-42ba-b80c-dec7a7419fed","type":"Square"},"selection_glyph":null},"id":"54d65eb5-0d63-45f4-a07a-8e47c43f9157","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"721cbfc2-52d2-4f40-8b76-4a132a1238fd","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"c4cbde4c-5a80-4d41-aa51-1891fca9a2e0","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"712fd274-12af-4e30-abc9-72ada23d2c2f","type":"LinearAxis"}],"left":[{"id":"09cc03bd-6d43-4e8c-9f53-b8d4f240b52d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"712fd274-12af-4e30-abc9-72ada23d2c2f","type":"LinearAxis"},{"id":"2cce708b-0c36-44e9-9400-e7c0a5eaba17","type":"Grid"},{"id":"09cc03bd-6d43-4e8c-9f53-b8d4f240b52d","type":"LinearAxis"},{"id":"c0d60b1a-ac27-4c6c-b07c-d46ac2ef938a","type":"Grid"},{"id":"721cbfc2-52d2-4f40-8b76-4a132a1238fd","type":"BoxAnnotation"},{"id":"54d65eb5-0d63-45f4-a07a-8e47c43f9157","type":"GlyphRenderer"}],"title":{"id":"e1507c92-1660-450e-8fe0-258cfe429344","type":"Title"},"tool_events":{"id":"3700ebb5-e291-4e8c-98fb-9b391570de53","type":"ToolEvents"},"toolbar":{"id":"7bb665f7-f4c5-49c5-a780-c07611ec0f84","type":"Toolbar"},"x_range":{"id":"122e3a90-152d-45f7-957b-14b164ae1a84","type":"DataRange1d"},"x_scale":{"id":"8f87669f-5f2c-4ebf-a438-4c27f7407ab2","type":"LinearScale"},"y_range":{"id":"b55411ef-99ed-4993-8056-4295493fb113","type":"DataRange1d"},"y_scale":{"id":"188a099f-4c1d-430c-a2a7-68e1fa76308a","type":"LinearScale"}},"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"72979c15-6075-48b9-a1ed-605cf716cbdf","type":"BasicTickFormatter"},"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2420c74-2703-42e0-949a-6767da1a845f","type":"BasicTicker"}},"id":"712fd274-12af-4e30-abc9-72ada23d2c2f","type":"LinearAxis"},{"attributes":{"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"}},"id":"04e6b942-6d09-4874-8297-afcbf58a221e","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3bcf0bcc-0501-4c80-970d-f676c527e9a2","type":"Square"},{"attributes":{"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"}},"id":"dd29ae21-5743-4470-afec-582a36d5f739","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"}},"id":"5f1b06fe-6dee-49bb-8966-aecb7cb16286","type":"PanTool"},{"attributes":{},"id":"6addb6d2-355b-4f04-80eb-7b4c31dee3a2","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b55411ef-99ed-4993-8056-4295493fb113","type":"DataRange1d"},{"attributes":{},"id":"a2420c74-2703-42e0-949a-6767da1a845f","type":"BasicTicker"},{"attributes":{"plot":{"id":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d","subtype":"Figure","type":"Plot"}},"id":"9e744980-5d55-4d1b-8b1d-327045794704","type":"SaveTool"}],"root_ids":["19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f7d2f9f8-b0e2-4b5e-ba96-03e1c842fbfa","elementid":"1d675eb0-870e-4fa7-a44c-d5d8bfa6c3ec","modelid":"19dcab5e-2a35-4ba6-9d5d-a8f62ae9069d"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
