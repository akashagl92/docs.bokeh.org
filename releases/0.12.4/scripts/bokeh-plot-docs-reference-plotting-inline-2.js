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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("8aac1121-f6c8-4497-9e52-ac0035b24da7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8aac1121-f6c8-4497-9e52-ac0035b24da7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"aa77a6dc-2eef-4533-95da-b69faabbf08c":{"roots":{"references":[{"attributes":{"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"}},"id":"9935b334-3a7a-4f23-8b34-2cd8a620e52f","type":"PanTool"},{"attributes":{"overlay":{"id":"297dedf2-0397-44f1-ab27-d81418275e15","type":"BoxAnnotation"},"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"}},"id":"cf6e2aa9-f218-4a58-98aa-4be0ddc03ea2","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a50f153-d05d-43f4-bdc6-dbac5b9bddd1","type":"Circle"},{"attributes":{},"id":"380ca95a-5cb5-4acf-a7bd-733820636d93","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"}},"id":"623ada48-fb12-4f0a-aed3-ff12c60f534f","type":"SaveTool"},{"attributes":{"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba87b754-a201-4cbb-a694-19fa19e68046","type":"BasicTicker"}},"id":"aaf107e3-ec3c-42c8-aa78-09f2d0d996da","type":"Grid"},{"attributes":{"formatter":{"id":"380ca95a-5cb5-4acf-a7bd-733820636d93","type":"BasicTickFormatter"},"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"74ddcb2f-3439-44eb-89c5-f21b8f00f36c","type":"BasicTicker"}},"id":"cb6dd125-44ed-40ca-91e4-586098a29ee2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d53e62ec-3668-4bce-a884-b12d1b06dd67","type":"DataRange1d"},{"attributes":{"formatter":{"id":"911b48fd-4d13-485f-9b90-116cfeffc2b7","type":"BasicTickFormatter"},"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba87b754-a201-4cbb-a694-19fa19e68046","type":"BasicTicker"}},"id":"58bf82ef-66e6-4890-8445-a218d4e0ffae","type":"LinearAxis"},{"attributes":{"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"}},"id":"c0574189-10c7-4627-8a5c-b393f9db157b","type":"HelpTool"},{"attributes":{"data_source":{"id":"77f2a669-3a3f-4e81-9623-01abdc969cc9","type":"ColumnDataSource"},"glyph":{"id":"0ab73081-deb2-4c02-ad12-6e7e9a2c018f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8a50f153-d05d-43f4-bdc6-dbac5b9bddd1","type":"Circle"},"selection_glyph":null},"id":"585da191-3724-41a5-b2e2-a55d2536ad35","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9935b334-3a7a-4f23-8b34-2cd8a620e52f","type":"PanTool"},{"id":"3385234f-c63a-4c26-87bd-2f098a2fef7b","type":"WheelZoomTool"},{"id":"cf6e2aa9-f218-4a58-98aa-4be0ddc03ea2","type":"BoxZoomTool"},{"id":"623ada48-fb12-4f0a-aed3-ff12c60f534f","type":"SaveTool"},{"id":"16eec430-d054-4151-bfa1-bacb57742cfe","type":"ResetTool"},{"id":"c0574189-10c7-4627-8a5c-b393f9db157b","type":"HelpTool"}]},"id":"61ba7623-6a9f-484c-a403-be1a40f117d6","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ab73081-deb2-4c02-ad12-6e7e9a2c018f","type":"Circle"},{"attributes":{"below":[{"id":"58bf82ef-66e6-4890-8445-a218d4e0ffae","type":"LinearAxis"}],"left":[{"id":"cb6dd125-44ed-40ca-91e4-586098a29ee2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"58bf82ef-66e6-4890-8445-a218d4e0ffae","type":"LinearAxis"},{"id":"aaf107e3-ec3c-42c8-aa78-09f2d0d996da","type":"Grid"},{"id":"cb6dd125-44ed-40ca-91e4-586098a29ee2","type":"LinearAxis"},{"id":"d33fd2f7-6347-4f5e-b253-545a03bbf0dc","type":"Grid"},{"id":"297dedf2-0397-44f1-ab27-d81418275e15","type":"BoxAnnotation"},{"id":"585da191-3724-41a5-b2e2-a55d2536ad35","type":"GlyphRenderer"}],"title":{"id":"649e0ad4-67b4-4cbc-8555-9d2377ede1af","type":"Title"},"tool_events":{"id":"0ddb2ae6-ca7b-44d2-880c-b1bd16606fce","type":"ToolEvents"},"toolbar":{"id":"61ba7623-6a9f-484c-a403-be1a40f117d6","type":"Toolbar"},"x_range":{"id":"7074ca7f-e0e2-4c0f-94ca-6d89778b80c9","type":"DataRange1d"},"y_range":{"id":"d53e62ec-3668-4bce-a884-b12d1b06dd67","type":"DataRange1d"}},"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7074ca7f-e0e2-4c0f-94ca-6d89778b80c9","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"649e0ad4-67b4-4cbc-8555-9d2377ede1af","type":"Title"},{"attributes":{},"id":"74ddcb2f-3439-44eb-89c5-f21b8f00f36c","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"297dedf2-0397-44f1-ab27-d81418275e15","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"74ddcb2f-3439-44eb-89c5-f21b8f00f36c","type":"BasicTicker"}},"id":"d33fd2f7-6347-4f5e-b253-545a03bbf0dc","type":"Grid"},{"attributes":{"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"}},"id":"3385234f-c63a-4c26-87bd-2f098a2fef7b","type":"WheelZoomTool"},{"attributes":{},"id":"ba87b754-a201-4cbb-a694-19fa19e68046","type":"BasicTicker"},{"attributes":{},"id":"911b48fd-4d13-485f-9b90-116cfeffc2b7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1f27296a-d9c1-4b00-9065-cf6c67f82f72","subtype":"Figure","type":"Plot"}},"id":"16eec430-d054-4151-bfa1-bacb57742cfe","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"77f2a669-3a3f-4e81-9623-01abdc969cc9","type":"ColumnDataSource"},{"attributes":{},"id":"0ddb2ae6-ca7b-44d2-880c-b1bd16606fce","type":"ToolEvents"}],"root_ids":["1f27296a-d9c1-4b00-9065-cf6c67f82f72"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"aa77a6dc-2eef-4533-95da-b69faabbf08c","elementid":"8aac1121-f6c8-4497-9e52-ac0035b24da7","modelid":"1f27296a-d9c1-4b00-9065-cf6c67f82f72"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
