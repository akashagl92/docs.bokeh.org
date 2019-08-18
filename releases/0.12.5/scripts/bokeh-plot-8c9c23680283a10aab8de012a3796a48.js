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
      };var element = document.getElementById("5d51b658-aa79-4bdf-8b4a-138ac33d11ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d51b658-aa79-4bdf-8b4a-138ac33d11ec' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"b5cfab0c-66fe-4c48-b3eb-06fa99749ab7":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"5708eca9-30b8-4d40-a415-dde3f41ff976","type":"VBar"},{"attributes":{},"id":"402fa9db-592c-4ead-b839-eaa82165889e","type":"BasicTicker"},{"attributes":{"below":[{"id":"0a583e98-8098-4513-85c3-1f7dbe01e1fa","type":"LinearAxis"}],"left":[{"id":"dbb22b72-85b4-4146-8af6-d8bfc21ffccc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0a583e98-8098-4513-85c3-1f7dbe01e1fa","type":"LinearAxis"},{"id":"10a3c1b6-df23-42a8-b6ff-20a49a7d3365","type":"Grid"},{"id":"dbb22b72-85b4-4146-8af6-d8bfc21ffccc","type":"LinearAxis"},{"id":"92c267a8-f03b-4695-80f2-b5dbc2f475be","type":"Grid"},{"id":"f8f1932a-3310-4c02-904f-386c1347ab84","type":"BoxAnnotation"},{"id":"a397d1cf-c706-49de-9cfe-e622f0bdfb1b","type":"GlyphRenderer"}],"title":{"id":"4ca89a1f-c9e8-451d-a796-3cf2c9789a59","type":"Title"},"tool_events":{"id":"132e9832-2a84-4601-974a-229e5528fd9c","type":"ToolEvents"},"toolbar":{"id":"9f08fec7-ab4c-450c-be59-67975d54f445","type":"Toolbar"},"x_range":{"id":"05c1e454-826b-47ef-be0d-b725ccdd6266","type":"DataRange1d"},"y_range":{"id":"4f00a5f2-57a4-4641-a85b-8b2350cba574","type":"DataRange1d"}},"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"05c1e454-826b-47ef-be0d-b725ccdd6266","type":"DataRange1d"},{"attributes":{"overlay":{"id":"f8f1932a-3310-4c02-904f-386c1347ab84","type":"BoxAnnotation"},"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"}},"id":"d303e8ec-d680-4d58-a7df-f39311dd1a68","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"531d0047-cf0f-454b-a2ee-862b2a7c0557","type":"VBar"},{"attributes":{"callback":null},"id":"4f00a5f2-57a4-4641-a85b-8b2350cba574","type":"DataRange1d"},{"attributes":{},"id":"a6a6808a-a7cf-41b7-808d-ac22a2e7263b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"},"ticker":{"id":"70d40e2e-2574-41a2-830d-7350671e7867","type":"BasicTicker"}},"id":"10a3c1b6-df23-42a8-b6ff-20a49a7d3365","type":"Grid"},{"attributes":{},"id":"4246e7f3-f69e-462b-99b0-f033bd910fc0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"}},"id":"e9563c10-1cbc-4fc8-b113-90157880a694","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fddf8655-4a5f-4e64-bc05-3a2412d7be2e","type":"PanTool"},{"id":"e9563c10-1cbc-4fc8-b113-90157880a694","type":"WheelZoomTool"},{"id":"d303e8ec-d680-4d58-a7df-f39311dd1a68","type":"BoxZoomTool"},{"id":"931e9c92-0412-4094-a1f0-8732eadb4a14","type":"SaveTool"},{"id":"48d501d0-c175-45d1-8205-02a6b7710c2c","type":"ResetTool"},{"id":"474e481c-3645-4e63-aa6c-c681602995a7","type":"HelpTool"}]},"id":"9f08fec7-ab4c-450c-be59-67975d54f445","type":"Toolbar"},{"attributes":{"data_source":{"id":"c47b0dec-95f1-4e99-aec4-f8ab970807a4","type":"ColumnDataSource"},"glyph":{"id":"531d0047-cf0f-454b-a2ee-862b2a7c0557","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5708eca9-30b8-4d40-a415-dde3f41ff976","type":"VBar"},"selection_glyph":null},"id":"a397d1cf-c706-49de-9cfe-e622f0bdfb1b","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"},"ticker":{"id":"402fa9db-592c-4ead-b839-eaa82165889e","type":"BasicTicker"}},"id":"92c267a8-f03b-4695-80f2-b5dbc2f475be","type":"Grid"},{"attributes":{},"id":"132e9832-2a84-4601-974a-229e5528fd9c","type":"ToolEvents"},{"attributes":{"formatter":{"id":"a6a6808a-a7cf-41b7-808d-ac22a2e7263b","type":"BasicTickFormatter"},"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"},"ticker":{"id":"402fa9db-592c-4ead-b839-eaa82165889e","type":"BasicTicker"}},"id":"dbb22b72-85b4-4146-8af6-d8bfc21ffccc","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["top","x"],"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]}},"id":"c47b0dec-95f1-4e99-aec4-f8ab970807a4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"}},"id":"474e481c-3645-4e63-aa6c-c681602995a7","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f8f1932a-3310-4c02-904f-386c1347ab84","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"}},"id":"fddf8655-4a5f-4e64-bc05-3a2412d7be2e","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"4ca89a1f-c9e8-451d-a796-3cf2c9789a59","type":"Title"},{"attributes":{"formatter":{"id":"4246e7f3-f69e-462b-99b0-f033bd910fc0","type":"BasicTickFormatter"},"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"},"ticker":{"id":"70d40e2e-2574-41a2-830d-7350671e7867","type":"BasicTicker"}},"id":"0a583e98-8098-4513-85c3-1f7dbe01e1fa","type":"LinearAxis"},{"attributes":{"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"}},"id":"48d501d0-c175-45d1-8205-02a6b7710c2c","type":"ResetTool"},{"attributes":{"plot":{"id":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362","subtype":"Figure","type":"Plot"}},"id":"931e9c92-0412-4094-a1f0-8732eadb4a14","type":"SaveTool"},{"attributes":{},"id":"70d40e2e-2574-41a2-830d-7350671e7867","type":"BasicTicker"}],"root_ids":["73ec93c7-5b4b-4027-aaf5-d5a24aef8362"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b5cfab0c-66fe-4c48-b3eb-06fa99749ab7","elementid":"5d51b658-aa79-4bdf-8b4a-138ac33d11ec","modelid":"73ec93c7-5b4b-4027-aaf5-d5a24aef8362"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
