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
      };var element = document.getElementById("4746583c-c4c2-4bd7-81fe-3c92e18d6703");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4746583c-c4c2-4bd7-81fe-3c92e18d6703' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"e3adbf5f-5413-4224-895c-ece74780c72e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"91347237-faca-4808-a9b8-e5ded0bea697","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"bc167fc5-6a38-4ca5-a41a-a0215f9e6e5c","type":"DataRange1d"},{"attributes":{"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6950048-9f9a-4e48-9206-378ec2a97f9f","type":"BasicTicker"}},"id":"dc361aa9-756c-4717-a651-f6e488cb989a","type":"Grid"},{"attributes":{},"id":"e6950048-9f9a-4e48-9206-378ec2a97f9f","type":"BasicTicker"},{"attributes":{"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"}},"id":"044af3f5-68d7-4ff2-af79-93999fa193c7","type":"ResetTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1bd72dc4-c960-4182-a638-afb23b5b711a","type":"SquareCross"},{"attributes":{"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"}},"id":"7955f33b-20ef-44c6-8ecd-1303f457b842","type":"SaveTool"},{"attributes":{},"id":"ebd0474f-19ad-46fd-9fc0-32ceca301673","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"}},"id":"3836d2cd-994c-41b5-9687-ab040483ff2a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"}},"id":"a70f83f8-3f48-44ff-8ac5-c060073aede7","type":"HelpTool"},{"attributes":{},"id":"841e62b0-ea1c-4316-9892-b506cf7d3b1e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"91347237-faca-4808-a9b8-e5ded0bea697","type":"ColumnDataSource"},"glyph":{"id":"1bd72dc4-c960-4182-a638-afb23b5b711a","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":{"id":"c4567d4a-2e6c-4e4f-809b-c1e0fe3da80c","type":"SquareCross"},"selection_glyph":null},"id":"33d32ee2-7e3a-46e5-97ab-09394b8550bf","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"22afb4c0-5398-4c78-b1b6-e8c3a9f50552","type":"DataRange1d"},{"attributes":{},"id":"b0e87e6d-6336-42f0-b623-420d91d78a7f","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4567d4a-2e6c-4e4f-809b-c1e0fe3da80c","type":"SquareCross"},{"attributes":{},"id":"4900eaa2-6e4c-4801-89ba-e0babfb63bfd","type":"BasicTicker"},{"attributes":{"below":[{"id":"ab6f3435-a2ad-43b1-a3c6-5fe823df97dd","type":"LinearAxis"}],"left":[{"id":"ec0d1c67-901e-4b09-bf57-a310e9f0ef3b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ab6f3435-a2ad-43b1-a3c6-5fe823df97dd","type":"LinearAxis"},{"id":"dc361aa9-756c-4717-a651-f6e488cb989a","type":"Grid"},{"id":"ec0d1c67-901e-4b09-bf57-a310e9f0ef3b","type":"LinearAxis"},{"id":"6e1bc94d-30f7-4bd6-a421-08c58fb8c4d5","type":"Grid"},{"id":"a5a021bd-dad5-4cfe-80f1-ed9a225f8e7a","type":"BoxAnnotation"},{"id":"33d32ee2-7e3a-46e5-97ab-09394b8550bf","type":"GlyphRenderer"}],"title":{"id":"5f14d8ac-4a62-48d6-929d-e9d1dec726d1","type":"Title"},"tool_events":{"id":"b0e87e6d-6336-42f0-b623-420d91d78a7f","type":"ToolEvents"},"toolbar":{"id":"2dfb8d12-5b60-4efd-9ba3-3cb81389bfd9","type":"Toolbar"},"x_range":{"id":"bc167fc5-6a38-4ca5-a41a-a0215f9e6e5c","type":"DataRange1d"},"y_range":{"id":"22afb4c0-5398-4c78-b1b6-e8c3a9f50552","type":"DataRange1d"}},"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a5a021bd-dad5-4cfe-80f1-ed9a225f8e7a","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8ab2c92-52d0-4163-a772-8c1a5aaacd76","type":"PanTool"},{"id":"3836d2cd-994c-41b5-9687-ab040483ff2a","type":"WheelZoomTool"},{"id":"12edb8b6-7d08-4e30-90cb-b896386c41e4","type":"BoxZoomTool"},{"id":"7955f33b-20ef-44c6-8ecd-1303f457b842","type":"SaveTool"},{"id":"044af3f5-68d7-4ff2-af79-93999fa193c7","type":"ResetTool"},{"id":"a70f83f8-3f48-44ff-8ac5-c060073aede7","type":"HelpTool"}]},"id":"2dfb8d12-5b60-4efd-9ba3-3cb81389bfd9","type":"Toolbar"},{"attributes":{"formatter":{"id":"841e62b0-ea1c-4316-9892-b506cf7d3b1e","type":"BasicTickFormatter"},"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6950048-9f9a-4e48-9206-378ec2a97f9f","type":"BasicTicker"}},"id":"ab6f3435-a2ad-43b1-a3c6-5fe823df97dd","type":"LinearAxis"},{"attributes":{"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"}},"id":"b8ab2c92-52d0-4163-a772-8c1a5aaacd76","type":"PanTool"},{"attributes":{"formatter":{"id":"ebd0474f-19ad-46fd-9fc0-32ceca301673","type":"BasicTickFormatter"},"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"4900eaa2-6e4c-4801-89ba-e0babfb63bfd","type":"BasicTicker"}},"id":"ec0d1c67-901e-4b09-bf57-a310e9f0ef3b","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"4900eaa2-6e4c-4801-89ba-e0babfb63bfd","type":"BasicTicker"}},"id":"6e1bc94d-30f7-4bd6-a421-08c58fb8c4d5","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"5f14d8ac-4a62-48d6-929d-e9d1dec726d1","type":"Title"},{"attributes":{"overlay":{"id":"a5a021bd-dad5-4cfe-80f1-ed9a225f8e7a","type":"BoxAnnotation"},"plot":{"id":"29c72457-83da-4cd9-8a59-bc436f72a6ee","subtype":"Figure","type":"Plot"}},"id":"12edb8b6-7d08-4e30-90cb-b896386c41e4","type":"BoxZoomTool"}],"root_ids":["29c72457-83da-4cd9-8a59-bc436f72a6ee"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"e3adbf5f-5413-4224-895c-ece74780c72e","elementid":"4746583c-c4c2-4bd7-81fe-3c92e18d6703","modelid":"29c72457-83da-4cd9-8a59-bc436f72a6ee"}];
              
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