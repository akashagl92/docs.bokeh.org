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
      };var element = document.getElementById("cc765be2-d7aa-4fab-9e69-70f0dfa50a6c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc765be2-d7aa-4fab-9e69-70f0dfa50a6c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"2224bc0f-e77d-47f4-a47c-26a69bab57fd":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b5eca7bf-8851-45c8-8da0-df6befbffa9f","type":"Toolbar"},{"attributes":{"formatter":{"id":"15778744-be5f-4494-94f1-cfb7f990f72f","type":"BasicTickFormatter"},"plot":{"id":"14f06a3f-179c-4cd0-8981-702f217368c6","type":"Plot"},"ticker":{"id":"7036a4a8-e4fa-43ee-a368-519b6561e8fb","type":"BasicTicker"}},"id":"699b0c0e-3a8c-43c0-bff1-12c865a335e2","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7d4fda83-343e-4d19-9461-ebe9b5d93dd8","type":"ColumnDataSource"},"glyph":{"id":"206be74d-f428-4c4e-81be-41e7f993efdd","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c382ab3f-3ab7-4933-804d-6786bcfd7732","type":"GlyphRenderer"},{"attributes":{},"id":"7036a4a8-e4fa-43ee-a368-519b6561e8fb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"57017baf-c93a-48ae-8611-9c2552033471","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"206be74d-f428-4c4e-81be-41e7f993efdd","type":"Segment"},{"attributes":{"callback":null},"id":"d92dc7d2-9f41-4c12-bf5d-1baec1b8d8fd","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xm01","y","ym01","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1]}},"id":"7d4fda83-343e-4d19-9461-ebe9b5d93dd8","type":"ColumnDataSource"},{"attributes":{},"id":"bce7d6e8-4687-4e50-a12f-76b72a0b9451","type":"ToolEvents"},{"attributes":{"below":[{"id":"7ef2b57a-3ad6-440a-9dab-6f3e713cf4a5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"699b0c0e-3a8c-43c0-bff1-12c865a335e2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c382ab3f-3ab7-4933-804d-6786bcfd7732","type":"GlyphRenderer"},{"id":"7ef2b57a-3ad6-440a-9dab-6f3e713cf4a5","type":"LinearAxis"},{"id":"699b0c0e-3a8c-43c0-bff1-12c865a335e2","type":"LinearAxis"},{"id":"cb8248f3-b4ff-46dd-bd50-60b936c8cf66","type":"Grid"},{"id":"d9cf95f0-8ba1-4dff-81d1-71981c433077","type":"Grid"}],"title":null,"tool_events":{"id":"bce7d6e8-4687-4e50-a12f-76b72a0b9451","type":"ToolEvents"},"toolbar":{"id":"b5eca7bf-8851-45c8-8da0-df6befbffa9f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d92dc7d2-9f41-4c12-bf5d-1baec1b8d8fd","type":"DataRange1d"},"y_range":{"id":"57017baf-c93a-48ae-8611-9c2552033471","type":"DataRange1d"}},"id":"14f06a3f-179c-4cd0-8981-702f217368c6","type":"Plot"},{"attributes":{},"id":"23fab732-ea27-46b6-8121-ab6b5e9ed2d2","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"14f06a3f-179c-4cd0-8981-702f217368c6","type":"Plot"},"ticker":{"id":"7036a4a8-e4fa-43ee-a368-519b6561e8fb","type":"BasicTicker"}},"id":"d9cf95f0-8ba1-4dff-81d1-71981c433077","type":"Grid"},{"attributes":{"formatter":{"id":"23fab732-ea27-46b6-8121-ab6b5e9ed2d2","type":"BasicTickFormatter"},"plot":{"id":"14f06a3f-179c-4cd0-8981-702f217368c6","type":"Plot"},"ticker":{"id":"438a217c-1223-4992-b840-64a73ef4816d","type":"BasicTicker"}},"id":"7ef2b57a-3ad6-440a-9dab-6f3e713cf4a5","type":"LinearAxis"},{"attributes":{},"id":"15778744-be5f-4494-94f1-cfb7f990f72f","type":"BasicTickFormatter"},{"attributes":{},"id":"438a217c-1223-4992-b840-64a73ef4816d","type":"BasicTicker"},{"attributes":{"plot":{"id":"14f06a3f-179c-4cd0-8981-702f217368c6","type":"Plot"},"ticker":{"id":"438a217c-1223-4992-b840-64a73ef4816d","type":"BasicTicker"}},"id":"cb8248f3-b4ff-46dd-bd50-60b936c8cf66","type":"Grid"}],"root_ids":["14f06a3f-179c-4cd0-8981-702f217368c6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"2224bc0f-e77d-47f4-a47c-26a69bab57fd","elementid":"cc765be2-d7aa-4fab-9e69-70f0dfa50a6c","modelid":"14f06a3f-179c-4cd0-8981-702f217368c6"}];
              
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