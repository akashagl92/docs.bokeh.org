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
      };var element = document.getElementById("0a45852d-b0ab-45ee-82e2-739735051f77");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0a45852d-b0ab-45ee-82e2-739735051f77' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"259ca808-be66-4c47-ae50-156ed9b8edf1":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"76204ecd-c070-4f29-9078-9c46eceb4c9c","type":"BasicTicker"}},"id":"a7aa2391-1463-4ac8-841b-4e0bde7ac8f0","type":"Grid"},{"attributes":{},"id":"b63a6e99-5694-4e15-8390-20a61b8966ff","type":"ToolEvents"},{"attributes":{"data_source":{"id":"d6e5ab86-c271-4f8a-9067-909e786ef231","type":"ColumnDataSource"},"glyph":{"id":"c2acfa38-6891-4700-844b-ab4c03dab3f0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"6799c7d5-5bd7-4d96-9978-0b6dbec9a0cb","type":"Circle"},"selection_glyph":null},"id":"13820bf6-8939-48ca-b4b7-6e0b345bef3c","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"98cd6e30-e2c2-4a2c-bfe9-38e49ef073e2","type":"BoxAnnotation"},"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"}},"id":"3a955f3f-3eb5-4ef5-a050-f83f957a9057","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"}},"id":"18864421-3782-4090-9cd6-a9ccb1db7886","type":"ResetTool"},{"attributes":{},"id":"280f907e-9b7f-41d0-a6b1-2d979db3e183","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6799c7d5-5bd7-4d96-9978-0b6dbec9a0cb","type":"Circle"},{"attributes":{"formatter":{"id":"280f907e-9b7f-41d0-a6b1-2d979db3e183","type":"BasicTickFormatter"},"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"21e428ea-d4a9-498f-b3d8-c452ea7579a3","type":"BasicTicker"}},"id":"812a2712-77ed-4416-9bc6-30aa64740577","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98cd6e30-e2c2-4a2c-bfe9-38e49ef073e2","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"2a7b81d4-85ad-4350-b20f-0b1bc68cb573","type":"BasicTickFormatter"},"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"76204ecd-c070-4f29-9078-9c46eceb4c9c","type":"BasicTicker"}},"id":"f674c459-6008-48d3-83e9-55cf9ea0f9dd","type":"LinearAxis"},{"attributes":{},"id":"76204ecd-c070-4f29-9078-9c46eceb4c9c","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2acfa38-6891-4700-844b-ab4c03dab3f0","type":"Circle"},{"attributes":{},"id":"2a7b81d4-85ad-4350-b20f-0b1bc68cb573","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"}},"id":"31531ee5-8769-41ef-94b2-67ad37df9481","type":"HelpTool"},{"attributes":{"below":[{"id":"812a2712-77ed-4416-9bc6-30aa64740577","type":"LinearAxis"}],"left":[{"id":"f674c459-6008-48d3-83e9-55cf9ea0f9dd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"812a2712-77ed-4416-9bc6-30aa64740577","type":"LinearAxis"},{"id":"548af7da-a1cd-47ae-80e4-ee49b059b82d","type":"Grid"},{"id":"f674c459-6008-48d3-83e9-55cf9ea0f9dd","type":"LinearAxis"},{"id":"a7aa2391-1463-4ac8-841b-4e0bde7ac8f0","type":"Grid"},{"id":"98cd6e30-e2c2-4a2c-bfe9-38e49ef073e2","type":"BoxAnnotation"},{"id":"13820bf6-8939-48ca-b4b7-6e0b345bef3c","type":"GlyphRenderer"}],"title":{"id":"0edda6fd-064f-465e-9920-15e58f5ff4fb","type":"Title"},"title_location":"left","tool_events":{"id":"b63a6e99-5694-4e15-8390-20a61b8966ff","type":"ToolEvents"},"toolbar":{"id":"e75acb43-29e8-4073-8b76-da42ff305e02","type":"Toolbar"},"x_range":{"id":"e486eaf9-f249-4ce7-9eee-8cfb6a1fdddd","type":"DataRange1d"},"y_range":{"id":"2efdc3d7-3d01-4214-b16a-fc3bc8fbd37b","type":"DataRange1d"}},"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"21e428ea-d4a9-498f-b3d8-c452ea7579a3","type":"BasicTicker"}},"id":"548af7da-a1cd-47ae-80e4-ee49b059b82d","type":"Grid"},{"attributes":{"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"}},"id":"1def408e-c38d-467e-b416-f4a14fafeeee","type":"PanTool"},{"attributes":{"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"}},"id":"1646c340-1e81-483f-9e06-6b45c48cbb0f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"2efdc3d7-3d01-4214-b16a-fc3bc8fbd37b","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Left Title"},"id":"0edda6fd-064f-465e-9920-15e58f5ff4fb","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"d6e5ab86-c271-4f8a-9067-909e786ef231","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"40ce848a-88f4-4ebf-8924-db2af1455c4b","subtype":"Figure","type":"Plot"}},"id":"212d53e2-fe71-403e-8fbf-00ddc22949b9","type":"SaveTool"},{"attributes":{"callback":null},"id":"e486eaf9-f249-4ce7-9eee-8cfb6a1fdddd","type":"DataRange1d"},{"attributes":{},"id":"21e428ea-d4a9-498f-b3d8-c452ea7579a3","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1def408e-c38d-467e-b416-f4a14fafeeee","type":"PanTool"},{"id":"1646c340-1e81-483f-9e06-6b45c48cbb0f","type":"WheelZoomTool"},{"id":"3a955f3f-3eb5-4ef5-a050-f83f957a9057","type":"BoxZoomTool"},{"id":"212d53e2-fe71-403e-8fbf-00ddc22949b9","type":"SaveTool"},{"id":"18864421-3782-4090-9cd6-a9ccb1db7886","type":"ResetTool"},{"id":"31531ee5-8769-41ef-94b2-67ad37df9481","type":"HelpTool"}]},"id":"e75acb43-29e8-4073-8b76-da42ff305e02","type":"Toolbar"}],"root_ids":["40ce848a-88f4-4ebf-8924-db2af1455c4b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"259ca808-be66-4c47-ae50-156ed9b8edf1","elementid":"0a45852d-b0ab-45ee-82e2-739735051f77","modelid":"40ce848a-88f4-4ebf-8924-db2af1455c4b"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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