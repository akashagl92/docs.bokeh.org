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
      };var element = document.getElementById("e0f88a40-3577-4595-b0b5-c2482cabc62d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0f88a40-3577-4595-b0b5-c2482cabc62d' but no matching script tag was found. ")
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
                var docs_json = {"0f43ac34-80c3-42ff-99bf-108b328f4339":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc58b1b2-26d6-4b55-b0a0-75f9a2793f83","type":"Line"},{"attributes":{},"id":"b76b31a7-2ebb-47dc-8f7f-3efd1595353e","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ca4ac96-3550-4574-bb11-86743934b0a9","type":"Line"},{"attributes":{},"id":"38fe2cd9-c5f3-4071-9299-66c2de41ff84","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"d4da828a-7c62-46ff-b6be-da82988cbcfd","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"450919c9-e144-4310-a725-f68221352648","type":"LinearAxis"}],"left":[{"id":"6121f09c-2ff5-4f2d-ae4e-69bc39ce3fd5","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"450919c9-e144-4310-a725-f68221352648","type":"LinearAxis"},{"id":"860981cf-9f10-4111-8e7b-41039ad048b3","type":"Grid"},{"id":"6121f09c-2ff5-4f2d-ae4e-69bc39ce3fd5","type":"LinearAxis"},{"id":"865a0173-2ddb-4798-978e-d7a98a2485b5","type":"Grid"},{"id":"d11b9d7b-6c44-487e-85f5-ed3456416eb2","type":"GlyphRenderer"},{"id":"da90f8e5-8b97-4fc5-ad95-c38ed4225989","type":"GlyphRenderer"}],"title":{"id":"ef6d108c-61ad-4589-a1b7-e6a3e361a3aa","type":"Title"},"tool_events":{"id":"0bdd8ab1-3965-4591-b0ee-f042ccc8fa48","type":"ToolEvents"},"toolbar":{"id":"fa55549e-c522-413f-b16d-07a40f88291f","type":"Toolbar"},"x_range":{"id":"b7607355-fd11-4234-abcc-d31d7b48d52c","type":"DataRange1d"},"y_range":{"id":"8149479d-71a4-4800-a186-d74292a31131","type":"DataRange1d"}},"id":"3009d80f-ce94-4ceb-9ea1-afaa3fa9a5bf","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"b76b31a7-2ebb-47dc-8f7f-3efd1595353e","type":"BasicTickFormatter"},"plot":{"id":"3009d80f-ce94-4ceb-9ea1-afaa3fa9a5bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"38fe2cd9-c5f3-4071-9299-66c2de41ff84","type":"BasicTicker"}},"id":"6121f09c-2ff5-4f2d-ae4e-69bc39ce3fd5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"3009d80f-ce94-4ceb-9ea1-afaa3fa9a5bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"38fe2cd9-c5f3-4071-9299-66c2de41ff84","type":"BasicTicker"}},"id":"865a0173-2ddb-4798-978e-d7a98a2485b5","type":"Grid"},{"attributes":{},"id":"0bdd8ab1-3965-4591-b0ee-f042ccc8fa48","type":"ToolEvents"},{"attributes":{"plot":{"id":"3009d80f-ce94-4ceb-9ea1-afaa3fa9a5bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"6332da1c-1b12-4d7a-9a63-d914cf432962","type":"BasicTicker"},"visible":false},"id":"860981cf-9f10-4111-8e7b-41039ad048b3","type":"Grid"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f27fb39-8d04-4785-b3da-8f2a7b6f76a6","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fa55549e-c522-413f-b16d-07a40f88291f","type":"Toolbar"},{"attributes":{"data_source":{"id":"b683af16-4b6e-49db-9f8f-f69e90c8eb7c","type":"ColumnDataSource"},"glyph":{"id":"7f27fb39-8d04-4785-b3da-8f2a7b6f76a6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f5bbfe91-02d4-4401-a161-eb95c3ebc9b5","type":"Line"},"selection_glyph":null},"id":"d11b9d7b-6c44-487e-85f5-ed3456416eb2","type":"GlyphRenderer"},{"attributes":{},"id":"6332da1c-1b12-4d7a-9a63-d914cf432962","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d4da828a-7c62-46ff-b6be-da82988cbcfd","type":"ColumnDataSource"},"glyph":{"id":"6ca4ac96-3550-4574-bb11-86743934b0a9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc58b1b2-26d6-4b55-b0a0-75f9a2793f83","type":"Line"},"selection_glyph":null,"visible":false},"id":"da90f8e5-8b97-4fc5-ad95-c38ed4225989","type":"GlyphRenderer"},{"attributes":{},"id":"40ba01b0-2f9b-4b4b-b814-45ed645b897a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"40ba01b0-2f9b-4b4b-b814-45ed645b897a","type":"BasicTickFormatter"},"plot":{"id":"3009d80f-ce94-4ceb-9ea1-afaa3fa9a5bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"6332da1c-1b12-4d7a-9a63-d914cf432962","type":"BasicTicker"},"visible":false},"id":"450919c9-e144-4310-a725-f68221352648","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8149479d-71a4-4800-a186-d74292a31131","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b7607355-fd11-4234-abcc-d31d7b48d52c","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"ef6d108c-61ad-4589-a1b7-e6a3e361a3aa","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5bbfe91-02d4-4401-a161-eb95c3ebc9b5","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"b683af16-4b6e-49db-9f8f-f69e90c8eb7c","type":"ColumnDataSource"}],"root_ids":["3009d80f-ce94-4ceb-9ea1-afaa3fa9a5bf"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"0f43ac34-80c3-42ff-99bf-108b328f4339","elementid":"e0f88a40-3577-4595-b0b5-c2482cabc62d","modelid":"3009d80f-ce94-4ceb-9ea1-afaa3fa9a5bf"}];
                
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
