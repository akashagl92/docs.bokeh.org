document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("538cff33-4c7b-451b-a046-f782aa9a59b9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '538cff33-4c7b-451b-a046-f782aa9a59b9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b159112b-76a8-4a9d-bba6-0b2e42935f56":{"roots":{"references":[{"attributes":{"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"}},"id":"727bd5bd-08b2-4326-becb-bf3d08f3ad68","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e5ef227-d067-4101-b719-647a8f5daf9b","type":"Cross"},{"attributes":{"formatter":{"id":"e5683312-4243-4a1f-9a14-f89e5f57586d","type":"BasicTickFormatter"},"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2de39b1a-c3e1-4493-878d-4faa61eec9f3","type":"BasicTicker"}},"id":"b10295e5-1275-4d98-a632-0cb8d5b94aab","type":"LinearAxis"},{"attributes":{"below":[{"id":"b10295e5-1275-4d98-a632-0cb8d5b94aab","type":"LinearAxis"}],"left":[{"id":"a55a112b-c0dd-4d42-b0df-5d7c693a04be","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b10295e5-1275-4d98-a632-0cb8d5b94aab","type":"LinearAxis"},{"id":"d2eeaaab-fe56-48ee-998f-e86957eda7e0","type":"Grid"},{"id":"a55a112b-c0dd-4d42-b0df-5d7c693a04be","type":"LinearAxis"},{"id":"5ec23b09-15b1-4573-9b51-665c2768f7e1","type":"Grid"},{"id":"e98bd52a-3573-4203-8313-ef0b6b3bb614","type":"BoxAnnotation"},{"id":"ccd1a0e2-f7cc-47d9-9c59-19820da5f20d","type":"GlyphRenderer"}],"title":{"id":"74abef10-8e86-4dd5-a900-5e71406a293b","type":"Title"},"tool_events":{"id":"032429b9-2a3a-4e54-8208-232bbb3cffbf","type":"ToolEvents"},"toolbar":{"id":"ff94ba13-d215-45ff-8f44-319e81396579","type":"Toolbar"},"x_range":{"id":"9566a996-2544-41d1-aaed-8e4e7e620a73","type":"DataRange1d"},"y_range":{"id":"ad6d36e7-c120-4b4f-8012-e7b7e57a15ad","type":"DataRange1d"}},"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8d9ade08-fdb5-47a8-8b3a-d549a832c47f","type":"BasicTicker"},{"attributes":{},"id":"7fc9fd6b-6f97-46c8-b715-b174eff62630","type":"BasicTickFormatter"},{"attributes":{},"id":"032429b9-2a3a-4e54-8208-232bbb3cffbf","type":"ToolEvents"},{"attributes":{"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"}},"id":"c6d9765a-2d8d-4cef-baf3-2035e117727b","type":"SaveTool"},{"attributes":{"formatter":{"id":"7fc9fd6b-6f97-46c8-b715-b174eff62630","type":"BasicTickFormatter"},"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d9ade08-fdb5-47a8-8b3a-d549a832c47f","type":"BasicTicker"}},"id":"a55a112b-c0dd-4d42-b0df-5d7c693a04be","type":"LinearAxis"},{"attributes":{"overlay":{"id":"e98bd52a-3573-4203-8313-ef0b6b3bb614","type":"BoxAnnotation"},"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"}},"id":"7801ccd2-958c-4fad-99fc-c51dd376a5ad","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"}},"id":"6904209c-0c33-4021-ac8f-e57043a550c7","type":"ResetTool"},{"attributes":{},"id":"e5683312-4243-4a1f-9a14-f89e5f57586d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"}},"id":"9a763b81-d119-4115-b4cc-6046c9678279","type":"PanTool"},{"attributes":{"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"}},"id":"76fe8f23-f220-406b-bbd9-b31a36d78d87","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d9ade08-fdb5-47a8-8b3a-d549a832c47f","type":"BasicTicker"}},"id":"5ec23b09-15b1-4573-9b51-665c2768f7e1","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"74abef10-8e86-4dd5-a900-5e71406a293b","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e98bd52a-3573-4203-8313-ef0b6b3bb614","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"ad6d36e7-c120-4b4f-8012-e7b7e57a15ad","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ef42c8f1-9bff-4c87-85e1-9a2d8725aedc","type":"ColumnDataSource"},"glyph":{"id":"9e5ef227-d067-4101-b719-647a8f5daf9b","type":"Cross"},"hover_glyph":null,"nonselection_glyph":{"id":"19ac5770-04f7-4c7e-924a-364743176b88","type":"Cross"},"selection_glyph":null},"id":"ccd1a0e2-f7cc-47d9-9c59-19820da5f20d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"707a564d-058a-40bd-abd5-9ab375583df6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2de39b1a-c3e1-4493-878d-4faa61eec9f3","type":"BasicTicker"}},"id":"d2eeaaab-fe56-48ee-998f-e86957eda7e0","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9a763b81-d119-4115-b4cc-6046c9678279","type":"PanTool"},{"id":"727bd5bd-08b2-4326-becb-bf3d08f3ad68","type":"WheelZoomTool"},{"id":"7801ccd2-958c-4fad-99fc-c51dd376a5ad","type":"BoxZoomTool"},{"id":"c6d9765a-2d8d-4cef-baf3-2035e117727b","type":"SaveTool"},{"id":"6904209c-0c33-4021-ac8f-e57043a550c7","type":"ResetTool"},{"id":"76fe8f23-f220-406b-bbd9-b31a36d78d87","type":"HelpTool"}]},"id":"ff94ba13-d215-45ff-8f44-319e81396579","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"19ac5770-04f7-4c7e-924a-364743176b88","type":"Cross"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ef42c8f1-9bff-4c87-85e1-9a2d8725aedc","type":"ColumnDataSource"},{"attributes":{},"id":"2de39b1a-c3e1-4493-878d-4faa61eec9f3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9566a996-2544-41d1-aaed-8e4e7e620a73","type":"DataRange1d"}],"root_ids":["707a564d-058a-40bd-abd5-9ab375583df6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"b159112b-76a8-4a9d-bba6-0b2e42935f56","elementid":"538cff33-4c7b-451b-a046-f782aa9a59b9","modelid":"707a564d-058a-40bd-abd5-9ab375583df6"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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