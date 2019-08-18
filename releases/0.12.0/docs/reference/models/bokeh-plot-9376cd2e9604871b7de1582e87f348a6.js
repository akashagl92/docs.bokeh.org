document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("ecd485c0-7d82-41c2-ae72-7cb41775ae18");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ecd485c0-7d82-41c2-ae72-7cb41775ae18' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d94de0af-72e0-46d9-9a17-bf680f887a50":{"roots":{"references":[{"attributes":{"formatter":{"id":"1a9b5055-bb04-4ec0-8555-d2cf390ebbf1","type":"BasicTickFormatter"},"plot":{"id":"39737677-5ed8-4864-b779-98b43c683010","type":"Plot"},"ticker":{"id":"b7ad3078-b9ee-433d-a358-6efc6293f9b5","type":"BasicTicker"}},"id":"8b3b1081-7ac6-44fb-9a78-c970505e6e84","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"387b579c-378d-491c-bf32-9453d9c92dd5","type":"Wedge"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"c6913cfd-4658-4cab-9450-887c4890d968","type":"ColumnDataSource"},{"attributes":{},"id":"ca5869fc-eef6-43f5-9412-034fff6d241b","type":"ToolEvents"},{"attributes":{},"id":"b7ad3078-b9ee-433d-a358-6efc6293f9b5","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"574c9a75-6119-471f-8686-4a46c9a2692c","type":"Toolbar"},{"attributes":{},"id":"1a9b5055-bb04-4ec0-8555-d2cf390ebbf1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6dd485c1-8f46-4151-9ea7-e23f4ef7cc9d","type":"BasicTickFormatter"},"plot":{"id":"39737677-5ed8-4864-b779-98b43c683010","type":"Plot"},"ticker":{"id":"b9c0bc92-de71-42ea-953b-34ec851672ae","type":"BasicTicker"}},"id":"aa96bdb7-4e94-4308-86d1-3735a8e78dcb","type":"LinearAxis"},{"attributes":{"plot":{"id":"39737677-5ed8-4864-b779-98b43c683010","type":"Plot"},"ticker":{"id":"b9c0bc92-de71-42ea-953b-34ec851672ae","type":"BasicTicker"}},"id":"d7296e51-d49f-44de-b975-f6addb919c6c","type":"Grid"},{"attributes":{"below":[{"id":"aa96bdb7-4e94-4308-86d1-3735a8e78dcb","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8b3b1081-7ac6-44fb-9a78-c970505e6e84","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"47357f37-4b2a-4697-a8ca-8c4b5be50849","type":"GlyphRenderer"},{"id":"aa96bdb7-4e94-4308-86d1-3735a8e78dcb","type":"LinearAxis"},{"id":"8b3b1081-7ac6-44fb-9a78-c970505e6e84","type":"LinearAxis"},{"id":"d7296e51-d49f-44de-b975-f6addb919c6c","type":"Grid"},{"id":"75769eac-7e36-420f-b058-6e931fecc75b","type":"Grid"}],"title":null,"tool_events":{"id":"ca5869fc-eef6-43f5-9412-034fff6d241b","type":"ToolEvents"},"toolbar":{"id":"574c9a75-6119-471f-8686-4a46c9a2692c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d877d58c-c19f-41c3-b8e6-c36efcc56bc5","type":"DataRange1d"},"y_range":{"id":"494b07b6-a2d5-4719-a696-ca25ab00414a","type":"DataRange1d"}},"id":"39737677-5ed8-4864-b779-98b43c683010","type":"Plot"},{"attributes":{"data_source":{"id":"c6913cfd-4658-4cab-9450-887c4890d968","type":"ColumnDataSource"},"glyph":{"id":"387b579c-378d-491c-bf32-9453d9c92dd5","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"47357f37-4b2a-4697-a8ca-8c4b5be50849","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d877d58c-c19f-41c3-b8e6-c36efcc56bc5","type":"DataRange1d"},{"attributes":{},"id":"b9c0bc92-de71-42ea-953b-34ec851672ae","type":"BasicTicker"},{"attributes":{},"id":"6dd485c1-8f46-4151-9ea7-e23f4ef7cc9d","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"39737677-5ed8-4864-b779-98b43c683010","type":"Plot"},"ticker":{"id":"b7ad3078-b9ee-433d-a358-6efc6293f9b5","type":"BasicTicker"}},"id":"75769eac-7e36-420f-b058-6e931fecc75b","type":"Grid"},{"attributes":{"callback":null},"id":"494b07b6-a2d5-4719-a696-ca25ab00414a","type":"DataRange1d"}],"root_ids":["39737677-5ed8-4864-b779-98b43c683010"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d94de0af-72e0-46d9-9a17-bf680f887a50","elementid":"ecd485c0-7d82-41c2-ae72-7cb41775ae18","modelid":"39737677-5ed8-4864-b779-98b43c683010"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});