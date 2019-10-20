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
      };var element = document.getElementById("07e76d8f-95d0-4fc5-9c27-f727a41a5d6a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07e76d8f-95d0-4fc5-9c27-f727a41a5d6a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"cfec44c9-0827-4622-8599-c107e63415f5":{"roots":{"references":[{"attributes":{"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"}},"id":"56439c51-f5a4-4ea9-baca-1131678ad6e3","type":"PanTool"},{"attributes":{"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"}},"id":"242fef9b-6dcc-4c86-90a4-34f4f1dd76d2","type":"SaveTool"},{"attributes":{},"id":"dadcfbf9-d303-48bc-9142-f298083fe5ab","type":"BasicTicker"},{"attributes":{"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"}},"id":"078ac834-1bce-4073-8cd2-7039c90be99b","type":"HelpTool"},{"attributes":{},"id":"5bcf4000-1346-4272-bccd-1ff3937ae6c0","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f40a4076-96fc-4e2c-81ff-767be450fc00","type":"InvertedTriangle"},{"attributes":{"callback":null},"id":"4403f734-9888-4fe9-bd7e-be9cfb7b1d04","type":"DataRange1d"},{"attributes":{"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b8f7b08-1016-4092-aa64-bcf413cd5db8","type":"BasicTicker"}},"id":"297e5712-0b14-4734-9db3-bbcecf34b56e","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"},"ticker":{"id":"dadcfbf9-d303-48bc-9142-f298083fe5ab","type":"BasicTicker"}},"id":"82d14762-9b11-4c85-9034-837d564eb1df","type":"Grid"},{"attributes":{"data_source":{"id":"b1d56468-867e-4d15-9185-3f5e6fe636ee","type":"ColumnDataSource"},"glyph":{"id":"f40a4076-96fc-4e2c-81ff-767be450fc00","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":{"id":"93bd12db-5bff-4a96-a5c8-22da12c26cdf","type":"InvertedTriangle"},"selection_glyph":null},"id":"44da4cd8-6230-42f7-9b81-4551ef25c9f2","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"349e8150-bdd9-499c-b963-e1326bbdcd70","type":"BoxAnnotation"},"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"}},"id":"ef287da3-9a29-4b30-aeb0-a3f962136d29","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"}},"id":"5bd5e4e3-ae15-4437-bf94-74fa514e42d2","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"349e8150-bdd9-499c-b963-e1326bbdcd70","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"93bd12db-5bff-4a96-a5c8-22da12c26cdf","type":"InvertedTriangle"},{"attributes":{},"id":"1b8f7b08-1016-4092-aa64-bcf413cd5db8","type":"BasicTicker"},{"attributes":{"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"}},"id":"98e3afd1-1809-4cd2-bcc0-91e2f761d8a0","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"56439c51-f5a4-4ea9-baca-1131678ad6e3","type":"PanTool"},{"id":"5bd5e4e3-ae15-4437-bf94-74fa514e42d2","type":"WheelZoomTool"},{"id":"ef287da3-9a29-4b30-aeb0-a3f962136d29","type":"BoxZoomTool"},{"id":"242fef9b-6dcc-4c86-90a4-34f4f1dd76d2","type":"SaveTool"},{"id":"98e3afd1-1809-4cd2-bcc0-91e2f761d8a0","type":"ResetTool"},{"id":"078ac834-1bce-4073-8cd2-7039c90be99b","type":"HelpTool"}]},"id":"588226f4-4ccd-4f29-8647-6b5900288974","type":"Toolbar"},{"attributes":{"formatter":{"id":"0a015641-824d-456a-8a60-8448a6571ab9","type":"BasicTickFormatter"},"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"},"ticker":{"id":"dadcfbf9-d303-48bc-9142-f298083fe5ab","type":"BasicTicker"}},"id":"316a919a-97b8-440c-ab04-730cb4f673ff","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c73eba2c-5319-4444-a0c8-6406890189cd","type":"BasicTickFormatter"},"plot":{"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b8f7b08-1016-4092-aa64-bcf413cd5db8","type":"BasicTicker"}},"id":"cf9884d5-475f-4ed6-9645-0f9336c411f6","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"817b34d4-e8e5-402b-8414-aed88be63cde","type":"Title"},{"attributes":{"callback":null},"id":"46019a22-fbaf-4a32-a944-e298d23c834d","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"b1d56468-867e-4d15-9185-3f5e6fe636ee","type":"ColumnDataSource"},{"attributes":{},"id":"c73eba2c-5319-4444-a0c8-6406890189cd","type":"BasicTickFormatter"},{"attributes":{},"id":"0a015641-824d-456a-8a60-8448a6571ab9","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"cf9884d5-475f-4ed6-9645-0f9336c411f6","type":"LinearAxis"}],"left":[{"id":"316a919a-97b8-440c-ab04-730cb4f673ff","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cf9884d5-475f-4ed6-9645-0f9336c411f6","type":"LinearAxis"},{"id":"297e5712-0b14-4734-9db3-bbcecf34b56e","type":"Grid"},{"id":"316a919a-97b8-440c-ab04-730cb4f673ff","type":"LinearAxis"},{"id":"82d14762-9b11-4c85-9034-837d564eb1df","type":"Grid"},{"id":"349e8150-bdd9-499c-b963-e1326bbdcd70","type":"BoxAnnotation"},{"id":"44da4cd8-6230-42f7-9b81-4551ef25c9f2","type":"GlyphRenderer"}],"title":{"id":"817b34d4-e8e5-402b-8414-aed88be63cde","type":"Title"},"tool_events":{"id":"5bcf4000-1346-4272-bccd-1ff3937ae6c0","type":"ToolEvents"},"toolbar":{"id":"588226f4-4ccd-4f29-8647-6b5900288974","type":"Toolbar"},"x_range":{"id":"4403f734-9888-4fe9-bd7e-be9cfb7b1d04","type":"DataRange1d"},"y_range":{"id":"46019a22-fbaf-4a32-a944-e298d23c834d","type":"DataRange1d"}},"id":"635eb596-dbe2-4548-93f9-18e9cf41e374","subtype":"Figure","type":"Plot"}],"root_ids":["635eb596-dbe2-4548-93f9-18e9cf41e374"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"cfec44c9-0827-4622-8599-c107e63415f5","elementid":"07e76d8f-95d0-4fc5-9c27-f727a41a5d6a","modelid":"635eb596-dbe2-4548-93f9-18e9cf41e374"}];
              
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