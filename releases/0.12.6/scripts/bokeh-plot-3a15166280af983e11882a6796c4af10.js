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
      };var element = document.getElementById("078ac279-993f-449b-a3c5-19c1b94e145a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '078ac279-993f-449b-a3c5-19c1b94e145a' but no matching script tag was found. ")
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
                var docs_json = {"091e93ea-9c3c-4368-b20d-46af62f7b4b0":{"roots":{"references":[{"attributes":{},"id":"ab530945-63b4-44d9-a790-0c5242d3b44b","type":"LinearScale"},{"attributes":{},"id":"03d4bc90-6249-42e3-b9b0-2203f034f701","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f6f5a2f-0715-42ac-9e2f-7316568e2ee8","type":"Circle"},{"attributes":{"below":[{"id":"2e7d8c20-498e-4ac2-b6b2-eb4638322cf5","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"c2c79907-0ff2-4203-ab06-d9a3146cf38e","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"2e7d8c20-498e-4ac2-b6b2-eb4638322cf5","type":"LinearAxis"},{"id":"6d880eff-136a-4396-b9bb-e3119c465d79","type":"Grid"},{"id":"c2c79907-0ff2-4203-ab06-d9a3146cf38e","type":"LinearAxis"},{"id":"a7d36c9c-04fd-4970-90e5-c8a281ef0602","type":"Grid"},{"id":"23c1f0cb-31f3-43f7-a58d-2b7ad923b328","type":"BoxAnnotation"},{"id":"f39c3bc5-0160-4dae-94d7-fd9bc7be2418","type":"GlyphRenderer"}],"title":{"id":"7586a42e-1c52-47a5-b780-78aeed044929","type":"Title"},"tool_events":{"id":"03d4bc90-6249-42e3-b9b0-2203f034f701","type":"ToolEvents"},"toolbar":{"id":"6a50ed1b-e1d1-4fda-a45e-27c3fade86e5","type":"Toolbar"},"x_range":{"id":"aff973d9-e698-4ee5-8c06-131f7ae506d3","type":"DataRange1d"},"x_scale":{"id":"ab530945-63b4-44d9-a790-0c5242d3b44b","type":"LinearScale"},"y_range":{"id":"c7fe29be-dba6-4ed3-8685-1c9ebcbd8fce","type":"DataRange1d"},"y_scale":{"id":"3ab784d5-a63a-4145-ada3-4332919a3d17","type":"LinearScale"}},"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cdd60d05-20cd-4af2-b017-72a3f7cf1664","type":"PanTool"},{"id":"957d0788-1868-4ace-8271-d4199ca81af9","type":"WheelZoomTool"},{"id":"27c2ba84-9bb2-4616-ac51-514c7c2a2031","type":"BoxZoomTool"},{"id":"0479732d-b8ac-446a-a9e2-8356bed8d493","type":"SaveTool"},{"id":"a8c4254d-ad01-4406-8f63-c31049fcb490","type":"ResetTool"},{"id":"5b060465-b1b4-49a3-a3c0-5c9bbe08a9ae","type":"HelpTool"}]},"id":"6a50ed1b-e1d1-4fda-a45e-27c3fade86e5","type":"Toolbar"},{"attributes":{},"id":"5aa4d0e9-a42f-4e06-9f4c-a49507d5637d","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"7586a42e-1c52-47a5-b780-78aeed044929","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"643036ea-1abe-49d6-8d56-33d1a4015b52","type":"Circle"},{"attributes":{"callback":null},"id":"c7fe29be-dba6-4ed3-8685-1c9ebcbd8fce","type":"DataRange1d"},{"attributes":{"formatter":{"id":"095cf4a7-8e86-4b92-bb6a-f4e407d0d8a4","type":"BasicTickFormatter"},"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"42593050-c9c7-4988-878c-ef6cc068ea7e","type":"BasicTicker"}},"id":"2e7d8c20-498e-4ac2-b6b2-eb4638322cf5","type":"LinearAxis"},{"attributes":{"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"}},"id":"5b060465-b1b4-49a3-a3c0-5c9bbe08a9ae","type":"HelpTool"},{"attributes":{"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"42593050-c9c7-4988-878c-ef6cc068ea7e","type":"BasicTicker"}},"id":"6d880eff-136a-4396-b9bb-e3119c465d79","type":"Grid"},{"attributes":{"formatter":{"id":"df1d11c6-4d7b-492a-adba-d54076de8e5e","type":"BasicTickFormatter"},"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"5aa4d0e9-a42f-4e06-9f4c-a49507d5637d","type":"BasicTicker"}},"id":"c2c79907-0ff2-4203-ab06-d9a3146cf38e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"aff973d9-e698-4ee5-8c06-131f7ae506d3","type":"DataRange1d"},{"attributes":{"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"}},"id":"cdd60d05-20cd-4af2-b017-72a3f7cf1664","type":"PanTool"},{"attributes":{"data_source":{"id":"565de12e-6fb4-40ad-a4ce-30a4f3f0b296","type":"ColumnDataSource"},"glyph":{"id":"3f6f5a2f-0715-42ac-9e2f-7316568e2ee8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"643036ea-1abe-49d6-8d56-33d1a4015b52","type":"Circle"},"selection_glyph":null},"id":"f39c3bc5-0160-4dae-94d7-fd9bc7be2418","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23c1f0cb-31f3-43f7-a58d-2b7ad923b328","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"}},"id":"a8c4254d-ad01-4406-8f63-c31049fcb490","type":"ResetTool"},{"attributes":{},"id":"3ab784d5-a63a-4145-ada3-4332919a3d17","type":"LinearScale"},{"attributes":{},"id":"42593050-c9c7-4988-878c-ef6cc068ea7e","type":"BasicTicker"},{"attributes":{"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"}},"id":"957d0788-1868-4ace-8271-d4199ca81af9","type":"WheelZoomTool"},{"attributes":{},"id":"df1d11c6-4d7b-492a-adba-d54076de8e5e","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"23c1f0cb-31f3-43f7-a58d-2b7ad923b328","type":"BoxAnnotation"},"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"}},"id":"27c2ba84-9bb2-4616-ac51-514c7c2a2031","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"5aa4d0e9-a42f-4e06-9f4c-a49507d5637d","type":"BasicTicker"}},"id":"a7d36c9c-04fd-4970-90e5-c8a281ef0602","type":"Grid"},{"attributes":{"plot":{"id":"c55158f4-9157-4a4f-bded-0a6ac73890d2","subtype":"Figure","type":"Plot"}},"id":"0479732d-b8ac-446a-a9e2-8356bed8d493","type":"SaveTool"},{"attributes":{},"id":"095cf4a7-8e86-4b92-bb6a-f4e407d0d8a4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"565de12e-6fb4-40ad-a4ce-30a4f3f0b296","type":"ColumnDataSource"}],"root_ids":["c55158f4-9157-4a4f-bded-0a6ac73890d2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"091e93ea-9c3c-4368-b20d-46af62f7b4b0","elementid":"078ac279-993f-449b-a3c5-19c1b94e145a","modelid":"c55158f4-9157-4a4f-bded-0a6ac73890d2"}];
                
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
