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
      };var element = document.getElementById("afdad7cd-56ae-41d5-a77e-0c60860be221");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'afdad7cd-56ae-41d5-a77e-0c60860be221' but no matching script tag was found. ")
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
                  var docs_json = {"2fe9012a-8197-4c77-9e3f-030f78a82173":{"roots":{"references":[{"attributes":{"plot":null,"text":null},"id":"c897f02e-a8e7-41a8-89e2-c26a2e0ca41f","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"65c3c233-e346-4f4e-b2e4-60190342f449","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"}},"id":"fab4025f-bf2c-425b-9e1c-e2169a40dc2a","type":"ResetTool"},{"attributes":{},"id":"916ee853-e355-4ba3-a76c-226569bc660d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"86754cc3-24b7-4929-990c-b742e347c87e","type":"BasicTickFormatter"},"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"74feac18-4812-4588-9e1d-113a8da982c6","type":"BasicTicker"}},"id":"15143aca-7dd0-4d20-a6c8-bf8aee304758","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"d84c5f14-af4b-48b2-a0c3-d51e8c8092c4","type":"Annulus"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5fa7ee51-19d5-4b2e-92a5-c9363b7c9591","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9df23519-6719-4137-8fb0-14f943321565","type":"PanTool"},{"id":"a1f9e93b-1059-460b-aac7-55ad7f0b8b52","type":"WheelZoomTool"},{"id":"ac3376b4-c8c2-4d46-8d6e-78ea666e04d8","type":"BoxZoomTool"},{"id":"1dfdc59d-35ca-4baa-9a8d-54bf748da170","type":"SaveTool"},{"id":"fab4025f-bf2c-425b-9e1c-e2169a40dc2a","type":"ResetTool"},{"id":"53382d43-a331-42bf-adb1-1ea4c500e812","type":"HelpTool"}]},"id":"b578602c-d578-4954-b199-bd5d772d0aa4","type":"Toolbar"},{"attributes":{"formatter":{"id":"efa7d873-da49-4035-97f1-e905b0821ac1","type":"BasicTickFormatter"},"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"916ee853-e355-4ba3-a76c-226569bc660d","type":"BasicTicker"}},"id":"4d4db111-193f-4d52-b200-903fb121d2f4","type":"LinearAxis"},{"attributes":{"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"}},"id":"1dfdc59d-35ca-4baa-9a8d-54bf748da170","type":"SaveTool"},{"attributes":{"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"}},"id":"53382d43-a331-42bf-adb1-1ea4c500e812","type":"HelpTool"},{"attributes":{"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"916ee853-e355-4ba3-a76c-226569bc660d","type":"BasicTicker"}},"id":"4811a064-d3aa-4d47-8daf-f10164ad7043","type":"Grid"},{"attributes":{},"id":"86754cc3-24b7-4929-990c-b742e347c87e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"65c3c233-e346-4f4e-b2e4-60190342f449","type":"ColumnDataSource"},"glyph":{"id":"d84c5f14-af4b-48b2-a0c3-d51e8c8092c4","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"2585a723-41ed-4bd5-8b09-7da3f0549405","type":"Annulus"},"selection_glyph":null},"id":"16c7e93c-8f87-4895-b991-68b60f0df754","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"}},"id":"a1f9e93b-1059-460b-aac7-55ad7f0b8b52","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"5fa7ee51-19d5-4b2e-92a5-c9363b7c9591","type":"BoxAnnotation"},"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"}},"id":"ac3376b4-c8c2-4d46-8d6e-78ea666e04d8","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"4d4db111-193f-4d52-b200-903fb121d2f4","type":"LinearAxis"}],"left":[{"id":"15143aca-7dd0-4d20-a6c8-bf8aee304758","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4d4db111-193f-4d52-b200-903fb121d2f4","type":"LinearAxis"},{"id":"4811a064-d3aa-4d47-8daf-f10164ad7043","type":"Grid"},{"id":"15143aca-7dd0-4d20-a6c8-bf8aee304758","type":"LinearAxis"},{"id":"af3f90be-ba8c-4ee0-b196-ae912b83d219","type":"Grid"},{"id":"5fa7ee51-19d5-4b2e-92a5-c9363b7c9591","type":"BoxAnnotation"},{"id":"16c7e93c-8f87-4895-b991-68b60f0df754","type":"GlyphRenderer"}],"title":{"id":"c897f02e-a8e7-41a8-89e2-c26a2e0ca41f","type":"Title"},"tool_events":{"id":"a1e3e69c-cbcd-4174-b339-d963e9c3a5a9","type":"ToolEvents"},"toolbar":{"id":"b578602c-d578-4954-b199-bd5d772d0aa4","type":"Toolbar"},"x_range":{"id":"5d3c7c45-89a7-436d-b7a1-011c676bc94e","type":"DataRange1d"},"y_range":{"id":"b6afa5d6-8510-449f-b0c3-453992e6f38b","type":"DataRange1d"}},"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"74feac18-4812-4588-9e1d-113a8da982c6","type":"BasicTicker"}},"id":"af3f90be-ba8c-4ee0-b196-ae912b83d219","type":"Grid"},{"attributes":{"callback":null},"id":"5d3c7c45-89a7-436d-b7a1-011c676bc94e","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b6afa5d6-8510-449f-b0c3-453992e6f38b","type":"DataRange1d"},{"attributes":{},"id":"74feac18-4812-4588-9e1d-113a8da982c6","type":"BasicTicker"},{"attributes":{},"id":"a1e3e69c-cbcd-4174-b339-d963e9c3a5a9","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"2585a723-41ed-4bd5-8b09-7da3f0549405","type":"Annulus"},{"attributes":{"plot":{"id":"68bd70eb-5773-49bd-a205-e1c0d7418f9b","subtype":"Figure","type":"Plot"}},"id":"9df23519-6719-4137-8fb0-14f943321565","type":"PanTool"},{"attributes":{},"id":"efa7d873-da49-4035-97f1-e905b0821ac1","type":"BasicTickFormatter"}],"root_ids":["68bd70eb-5773-49bd-a205-e1c0d7418f9b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"2fe9012a-8197-4c77-9e3f-030f78a82173","elementid":"afdad7cd-56ae-41d5-a77e-0c60860be221","modelid":"68bd70eb-5773-49bd-a205-e1c0d7418f9b"}];
                  
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