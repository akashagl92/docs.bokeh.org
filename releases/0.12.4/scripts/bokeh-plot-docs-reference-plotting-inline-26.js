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
      };var element = document.getElementById("dcd3689a-197f-4a9e-b7d6-2c91f09952ba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dcd3689a-197f-4a9e-b7d6-2c91f09952ba' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"9bba90eb-6df4-4ddc-8941-dc54d2e7f436":{"roots":{"references":[{"attributes":{"overlay":{"id":"3c8425f2-0d7e-45e5-9ed5-167139dab7df","type":"BoxAnnotation"},"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"}},"id":"0b0232d8-ea51-4915-8f0c-3387df56f8fa","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"}},"id":"be94772f-3d1f-4156-a949-da79f7a1506f","type":"PanTool"},{"attributes":{"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"}},"id":"161d1771-500c-4c18-92cc-c6b579599b91","type":"HelpTool"},{"attributes":{"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cf64500-11be-4f42-adbe-f9ba9b9e4191","type":"BasicTicker"}},"id":"9d802016-d39a-41e7-abe0-d9dfeca63502","type":"Grid"},{"attributes":{"formatter":{"id":"2d9548f5-bfb6-44fd-8a81-218a73980294","type":"BasicTickFormatter"},"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cf64500-11be-4f42-adbe-f9ba9b9e4191","type":"BasicTicker"}},"id":"1446b630-4535-4049-b0fa-aaf9e5cab68c","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3c8425f2-0d7e-45e5-9ed5-167139dab7df","type":"BoxAnnotation"},{"attributes":{},"id":"4cf64500-11be-4f42-adbe-f9ba9b9e4191","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"256bd139-e9b9-4209-a43b-2493b97371a4","type":"BasicTicker"}},"id":"437c48fb-ce55-464f-9d89-9e3f658d6b25","type":"Grid"},{"attributes":{"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"}},"id":"dab41c01-dd3e-46eb-af51-2f9f76cd3550","type":"ResetTool"},{"attributes":{"formatter":{"id":"ebedaa13-97a4-4ac6-bc49-e19119dece60","type":"BasicTickFormatter"},"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"256bd139-e9b9-4209-a43b-2493b97371a4","type":"BasicTicker"}},"id":"4d3491a3-7538-4aac-ae09-94d3aa99182f","type":"LinearAxis"},{"attributes":{"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"}},"id":"3c4d2c06-daea-47e5-8ad3-3569151d03d9","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0dfeab3a-2978-4664-ab10-ba8e5e46cc08","type":"X"},{"attributes":{},"id":"256bd139-e9b9-4209-a43b-2493b97371a4","type":"BasicTicker"},{"attributes":{"plot":{"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"}},"id":"df470177-b1e4-43b5-88db-82d66a7eef12","type":"WheelZoomTool"},{"attributes":{},"id":"2498ca97-a2be-4b15-b72d-b5f35ce3a5a7","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"dfbf38ed-c19c-433b-ab64-bce31cf89c84","type":"ColumnDataSource"},{"attributes":{},"id":"ebedaa13-97a4-4ac6-bc49-e19119dece60","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"bff74ff7-e0ef-4cd5-971c-a5abb425a056","type":"Title"},{"attributes":{"data_source":{"id":"dfbf38ed-c19c-433b-ab64-bce31cf89c84","type":"ColumnDataSource"},"glyph":{"id":"0dfeab3a-2978-4664-ab10-ba8e5e46cc08","type":"X"},"hover_glyph":null,"nonselection_glyph":{"id":"4e4d72fc-d472-4d76-bf30-2c03513bd3b4","type":"X"},"selection_glyph":null},"id":"1682e036-b712-463c-ab53-e0d30425afdc","type":"GlyphRenderer"},{"attributes":{},"id":"2d9548f5-bfb6-44fd-8a81-218a73980294","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1446b630-4535-4049-b0fa-aaf9e5cab68c","type":"LinearAxis"}],"left":[{"id":"4d3491a3-7538-4aac-ae09-94d3aa99182f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1446b630-4535-4049-b0fa-aaf9e5cab68c","type":"LinearAxis"},{"id":"9d802016-d39a-41e7-abe0-d9dfeca63502","type":"Grid"},{"id":"4d3491a3-7538-4aac-ae09-94d3aa99182f","type":"LinearAxis"},{"id":"437c48fb-ce55-464f-9d89-9e3f658d6b25","type":"Grid"},{"id":"3c8425f2-0d7e-45e5-9ed5-167139dab7df","type":"BoxAnnotation"},{"id":"1682e036-b712-463c-ab53-e0d30425afdc","type":"GlyphRenderer"}],"title":{"id":"bff74ff7-e0ef-4cd5-971c-a5abb425a056","type":"Title"},"tool_events":{"id":"2498ca97-a2be-4b15-b72d-b5f35ce3a5a7","type":"ToolEvents"},"toolbar":{"id":"6cb4c88b-31f6-485f-996f-cc940bc5494c","type":"Toolbar"},"x_range":{"id":"b9c825ca-0362-417c-a8f6-b19ee8886626","type":"DataRange1d"},"y_range":{"id":"b27b6b9f-dc2c-4c2e-a07f-8e17b8e1b760","type":"DataRange1d"}},"id":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e4d72fc-d472-4d76-bf30-2c03513bd3b4","type":"X"},{"attributes":{"callback":null},"id":"b9c825ca-0362-417c-a8f6-b19ee8886626","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b27b6b9f-dc2c-4c2e-a07f-8e17b8e1b760","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"be94772f-3d1f-4156-a949-da79f7a1506f","type":"PanTool"},{"id":"df470177-b1e4-43b5-88db-82d66a7eef12","type":"WheelZoomTool"},{"id":"0b0232d8-ea51-4915-8f0c-3387df56f8fa","type":"BoxZoomTool"},{"id":"3c4d2c06-daea-47e5-8ad3-3569151d03d9","type":"SaveTool"},{"id":"dab41c01-dd3e-46eb-af51-2f9f76cd3550","type":"ResetTool"},{"id":"161d1771-500c-4c18-92cc-c6b579599b91","type":"HelpTool"}]},"id":"6cb4c88b-31f6-485f-996f-cc940bc5494c","type":"Toolbar"}],"root_ids":["2d176fbf-7506-4b6e-be3c-834c8e7b43d5"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"9bba90eb-6df4-4ddc-8941-dc54d2e7f436","elementid":"dcd3689a-197f-4a9e-b7d6-2c91f09952ba","modelid":"2d176fbf-7506-4b6e-be3c-834c8e7b43d5"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
