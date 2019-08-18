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
      };var element = document.getElementById("cf66ea67-d39f-46ca-a1d1-20bb1ed30117");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf66ea67-d39f-46ca-a1d1-20bb1ed30117' but no matching script tag was found. ")
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
                var docs_json = {"ebc93100-7050-4434-9dd1-66763ba38721":{"roots":{"references":[{"attributes":{"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"}},"id":"e45e53fd-adaf-456b-ac98-59a68b25eaca","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4a32c07b-a7d1-438a-acdc-d211dd28a9b9","type":"PanTool"},{"id":"d4706983-9551-4cf2-97bc-4a37e668172f","type":"WheelZoomTool"},{"id":"142d81c1-f23d-43ea-874b-36ea9363622e","type":"BoxZoomTool"},{"id":"89fe7f33-0b33-4cfd-8fd2-4d6c0375331c","type":"SaveTool"},{"id":"e45e53fd-adaf-456b-ac98-59a68b25eaca","type":"ResetTool"},{"id":"3df8e7b9-d672-4a76-a375-85b8a98227bd","type":"HelpTool"}]},"id":"5f636d43-a623-4b49-b3d5-909837fe7611","type":"Toolbar"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff795bb4-af3f-4dbe-bec7-cbb2693064a0","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"6de156d6-be05-4dc9-bb9c-ba4bdc882638","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"f61bc507-b0f5-42a6-b135-e764a99526d0","type":"BasicTickFormatter"},"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3a958a5-a08b-4c13-9c9f-6156cf454529","type":"BasicTicker"}},"id":"1a87db20-b949-4de7-b3b6-bac6853c8725","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6de156d6-be05-4dc9-bb9c-ba4bdc882638","type":"ColumnDataSource"},"glyph":{"id":"ff795bb4-af3f-4dbe-bec7-cbb2693064a0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c7271fcd-ab18-41c2-977b-9e14d93404cf","type":"Line"},"selection_glyph":null},"id":"51b3f5ee-0bc9-4ced-9bf3-ff5f3f9084bb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"}},"id":"89fe7f33-0b33-4cfd-8fd2-4d6c0375331c","type":"SaveTool"},{"attributes":{"below":[{"id":"0a0b5d57-ca4f-4c87-8887-fff1bf671deb","type":"LinearAxis"}],"left":[{"id":"1a87db20-b949-4de7-b3b6-bac6853c8725","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0a0b5d57-ca4f-4c87-8887-fff1bf671deb","type":"LinearAxis"},{"id":"bff171c3-c141-4417-8b49-de2180eace72","type":"Grid"},{"id":"1a87db20-b949-4de7-b3b6-bac6853c8725","type":"LinearAxis"},{"id":"4f6ac43f-b11f-46f5-9ae4-8ad8674dd7ae","type":"Grid"},{"id":"705b2e1f-b6a7-4738-aec4-95bdd047fced","type":"BoxAnnotation"},{"id":"51b3f5ee-0bc9-4ced-9bf3-ff5f3f9084bb","type":"GlyphRenderer"}],"title":{"id":"eb3259ae-1d78-4108-ae78-86fe68c538ff","type":"Title"},"tool_events":{"id":"b781ba4d-a60a-4b10-9194-2863b8e284f5","type":"ToolEvents"},"toolbar":{"id":"5f636d43-a623-4b49-b3d5-909837fe7611","type":"Toolbar"},"x_range":{"id":"f3e97a74-c5fc-4f1e-aa81-1d7c78c6dd21","type":"DataRange1d"},"x_scale":{"id":"7d57df7e-4941-451a-940c-3596239a3c96","type":"LinearScale"},"y_range":{"id":"e64a8be8-20ae-4060-a047-c8a032dd2d49","type":"DataRange1d"},"y_scale":{"id":"e610a478-e26a-4586-a310-0bcc692ac317","type":"LinearScale"}},"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"705b2e1f-b6a7-4738-aec4-95bdd047fced","type":"BoxAnnotation"},{"attributes":{},"id":"f4e3584c-b42f-4f72-bac1-5cee31fe0cef","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"705b2e1f-b6a7-4738-aec4-95bdd047fced","type":"BoxAnnotation"},"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"}},"id":"142d81c1-f23d-43ea-874b-36ea9363622e","type":"BoxZoomTool"},{"attributes":{},"id":"f61bc507-b0f5-42a6-b135-e764a99526d0","type":"BasicTickFormatter"},{"attributes":{},"id":"7d57df7e-4941-451a-940c-3596239a3c96","type":"LinearScale"},{"attributes":{},"id":"e610a478-e26a-4586-a310-0bcc692ac317","type":"LinearScale"},{"attributes":{"callback":null},"id":"e64a8be8-20ae-4060-a047-c8a032dd2d49","type":"DataRange1d"},{"attributes":{"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"}},"id":"d4706983-9551-4cf2-97bc-4a37e668172f","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7271fcd-ab18-41c2-977b-9e14d93404cf","type":"Line"},{"attributes":{"formatter":{"id":"f4e3584c-b42f-4f72-bac1-5cee31fe0cef","type":"BasicTickFormatter"},"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6821ca2-1091-43d7-a18d-38c1e48d765f","type":"BasicTicker"}},"id":"0a0b5d57-ca4f-4c87-8887-fff1bf671deb","type":"LinearAxis"},{"attributes":{"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"}},"id":"4a32c07b-a7d1-438a-acdc-d211dd28a9b9","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"eb3259ae-1d78-4108-ae78-86fe68c538ff","type":"Title"},{"attributes":{"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6821ca2-1091-43d7-a18d-38c1e48d765f","type":"BasicTicker"}},"id":"bff171c3-c141-4417-8b49-de2180eace72","type":"Grid"},{"attributes":{"callback":null},"id":"f3e97a74-c5fc-4f1e-aa81-1d7c78c6dd21","type":"DataRange1d"},{"attributes":{},"id":"e3a958a5-a08b-4c13-9c9f-6156cf454529","type":"BasicTicker"},{"attributes":{"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"}},"id":"3df8e7b9-d672-4a76-a375-85b8a98227bd","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"8832c75e-41c2-4d0e-a071-080d0053069a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3a958a5-a08b-4c13-9c9f-6156cf454529","type":"BasicTicker"}},"id":"4f6ac43f-b11f-46f5-9ae4-8ad8674dd7ae","type":"Grid"},{"attributes":{},"id":"b781ba4d-a60a-4b10-9194-2863b8e284f5","type":"ToolEvents"},{"attributes":{},"id":"a6821ca2-1091-43d7-a18d-38c1e48d765f","type":"BasicTicker"}],"root_ids":["8832c75e-41c2-4d0e-a071-080d0053069a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ebc93100-7050-4434-9dd1-66763ba38721","elementid":"cf66ea67-d39f-46ca-a1d1-20bb1ed30117","modelid":"8832c75e-41c2-4d0e-a071-080d0053069a"}];
                
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
