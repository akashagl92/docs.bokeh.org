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
      };var element = document.getElementById("0000d604-55ad-4029-9161-749bf43cc025");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0000d604-55ad-4029-9161-749bf43cc025' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"ad93de7f-0714-4ece-af84-22e72cd7cdff":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"23be62d3-232b-402d-ba92-a06ec813ea1b","type":"ColumnDataSource"},{"attributes":{},"id":"d2796aa1-0db9-4f11-a3aa-567d242db5fc","type":"LinearScale"},{"attributes":{},"id":"b9f0ef9c-6730-4d69-b5ff-8c8b1fdee15c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"06bb056b-f3dc-4634-a95b-e95e113ef2f8","type":"Circle"},{"attributes":{},"id":"e47e4ad2-3895-4510-81b3-ae927c3cf909","type":"LinearScale"},{"attributes":{"formatter":{"id":"b9f0ef9c-6730-4d69-b5ff-8c8b1fdee15c","type":"BasicTickFormatter"},"plot":{"id":"695a1a19-13c1-45e1-99b2-0cad3fc5fbed","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c8c342e-fe09-48fb-ac49-be1194528d5d","type":"BasicTicker"}},"id":"f61032cc-dd63-42ba-a516-ebdff93a9f53","type":"LinearAxis"},{"attributes":{"bounds":[2,4],"plot":{"id":"695a1a19-13c1-45e1-99b2-0cad3fc5fbed","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1a7eb60-94dd-4c3d-8198-f612f30b0b85","type":"BasicTicker"}},"id":"346424e2-d8c3-4011-9e7b-988d21cc3876","type":"Grid"},{"attributes":{"formatter":{"id":"a34a4e0d-c230-4e28-8ad4-0a648c4229af","type":"BasicTickFormatter"},"plot":{"id":"695a1a19-13c1-45e1-99b2-0cad3fc5fbed","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1a7eb60-94dd-4c3d-8198-f612f30b0b85","type":"BasicTicker"}},"id":"813bf683-ff9b-4654-9f89-0be517158f32","type":"LinearAxis"},{"attributes":{"source":{"id":"23be62d3-232b-402d-ba92-a06ec813ea1b","type":"ColumnDataSource"}},"id":"2ec456e5-c81d-45cf-8748-a32240405584","type":"CDSView"},{"attributes":{"below":[{"id":"813bf683-ff9b-4654-9f89-0be517158f32","type":"LinearAxis"}],"left":[{"id":"f61032cc-dd63-42ba-a516-ebdff93a9f53","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"813bf683-ff9b-4654-9f89-0be517158f32","type":"LinearAxis"},{"id":"346424e2-d8c3-4011-9e7b-988d21cc3876","type":"Grid"},{"id":"f61032cc-dd63-42ba-a516-ebdff93a9f53","type":"LinearAxis"},{"id":"017c212c-b21d-4645-814e-ddc5a74eb1f5","type":"Grid"},{"id":"b0f75ca8-9c42-42a0-a935-e799e809014e","type":"BoxAnnotation"},{"id":"c129f251-9635-4deb-981e-90f9209fd65c","type":"GlyphRenderer"}],"title":{"id":"fe9bdb62-44ab-4781-9eeb-6505a1cbb153","type":"Title"},"toolbar":{"id":"50caf409-faee-4a1b-aaeb-fa050914dd49","type":"Toolbar"},"x_range":{"id":"ca434fc3-ce8f-4852-9afc-6c83c9f770cd","type":"DataRange1d"},"x_scale":{"id":"e47e4ad2-3895-4510-81b3-ae927c3cf909","type":"LinearScale"},"y_range":{"id":"6950ce77-ba30-4630-9eca-dd2a3a2619d5","type":"DataRange1d"},"y_scale":{"id":"d2796aa1-0db9-4f11-a3aa-567d242db5fc","type":"LinearScale"}},"id":"695a1a19-13c1-45e1-99b2-0cad3fc5fbed","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ad33a02e-903f-43bf-be11-a7a10668ec23","type":"WheelZoomTool"},{"attributes":{},"id":"bb06368f-3d83-4b85-a673-34650c6aefa2","type":"HelpTool"},{"attributes":{"callback":null},"id":"6950ce77-ba30-4630-9eca-dd2a3a2619d5","type":"DataRange1d"},{"attributes":{"overlay":{"id":"b0f75ca8-9c42-42a0-a935-e799e809014e","type":"BoxAnnotation"}},"id":"6fd2d48f-c8f4-41cd-b80d-10afcf6e4c74","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"fe9bdb62-44ab-4781-9eeb-6505a1cbb153","type":"Title"},{"attributes":{},"id":"9863c1a0-dff1-4deb-876b-1927485e9e28","type":"SaveTool"},{"attributes":{},"id":"6e47d2dd-768c-4e02-870e-543d34774878","type":"ResetTool"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"695a1a19-13c1-45e1-99b2-0cad3fc5fbed","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c8c342e-fe09-48fb-ac49-be1194528d5d","type":"BasicTicker"}},"id":"017c212c-b21d-4645-814e-ddc5a74eb1f5","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f15bac07-f6e8-45b2-8b5c-acd1edccbf5e","type":"PanTool"},{"id":"ad33a02e-903f-43bf-be11-a7a10668ec23","type":"WheelZoomTool"},{"id":"6fd2d48f-c8f4-41cd-b80d-10afcf6e4c74","type":"BoxZoomTool"},{"id":"9863c1a0-dff1-4deb-876b-1927485e9e28","type":"SaveTool"},{"id":"6e47d2dd-768c-4e02-870e-543d34774878","type":"ResetTool"},{"id":"bb06368f-3d83-4b85-a673-34650c6aefa2","type":"HelpTool"}]},"id":"50caf409-faee-4a1b-aaeb-fa050914dd49","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"05c9d1e2-df90-4330-aba5-5459012f97c5","type":"Circle"},{"attributes":{},"id":"a1a7eb60-94dd-4c3d-8198-f612f30b0b85","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ca434fc3-ce8f-4852-9afc-6c83c9f770cd","type":"DataRange1d"},{"attributes":{},"id":"a34a4e0d-c230-4e28-8ad4-0a648c4229af","type":"BasicTickFormatter"},{"attributes":{},"id":"1c8c342e-fe09-48fb-ac49-be1194528d5d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"23be62d3-232b-402d-ba92-a06ec813ea1b","type":"ColumnDataSource"},"glyph":{"id":"06bb056b-f3dc-4634-a95b-e95e113ef2f8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"05c9d1e2-df90-4330-aba5-5459012f97c5","type":"Circle"},"selection_glyph":null,"view":{"id":"2ec456e5-c81d-45cf-8748-a32240405584","type":"CDSView"}},"id":"c129f251-9635-4deb-981e-90f9209fd65c","type":"GlyphRenderer"},{"attributes":{},"id":"f15bac07-f6e8-45b2-8b5c-acd1edccbf5e","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b0f75ca8-9c42-42a0-a935-e799e809014e","type":"BoxAnnotation"}],"root_ids":["695a1a19-13c1-45e1-99b2-0cad3fc5fbed"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ad93de7f-0714-4ece-af84-22e72cd7cdff","elementid":"0000d604-55ad-4029-9161-749bf43cc025","modelid":"695a1a19-13c1-45e1-99b2-0cad3fc5fbed"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
