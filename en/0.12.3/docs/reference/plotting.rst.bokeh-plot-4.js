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
      };var element = document.getElementById("54bbef4e-169c-4219-ac1b-cdab5f508e00");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54bbef4e-169c-4219-ac1b-cdab5f508e00' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"79488ca4-2719-4778-9352-47be7324ce70":{"roots":{"references":[{"attributes":{"plot":null,"text":null},"id":"78562666-a85b-488d-967b-e1e1c7c4806f","type":"Title"},{"attributes":{},"id":"9a39c223-29f7-4327-8b80-18fcc847ead9","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6fabb970-696d-4835-9e2f-05fd9dcdecc4","type":"LinearAxis"}],"left":[{"id":"bf2e6e8a-d45b-425f-aaad-0c4abfb76f4e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6fabb970-696d-4835-9e2f-05fd9dcdecc4","type":"LinearAxis"},{"id":"2c51ced7-1dde-4276-85b5-61b3171b30ca","type":"Grid"},{"id":"bf2e6e8a-d45b-425f-aaad-0c4abfb76f4e","type":"LinearAxis"},{"id":"c7adfc02-2c16-430d-8d40-5704cbdcb85f","type":"Grid"},{"id":"23351c9d-8361-4cd9-a3ae-dab083d26e27","type":"BoxAnnotation"},{"id":"5218669e-937f-4417-bcfb-32d7e8131869","type":"GlyphRenderer"}],"title":{"id":"78562666-a85b-488d-967b-e1e1c7c4806f","type":"Title"},"tool_events":{"id":"d5f4a248-9ebf-4571-b1ce-ea85a9ed1b12","type":"ToolEvents"},"toolbar":{"id":"ee011f19-2fdb-4630-b1e6-2e8b008a0cd2","type":"Toolbar"},"x_range":{"id":"7503e36d-7eb0-493e-a55c-47f1afa4f37e","type":"DataRange1d"},"y_range":{"id":"62b00e4e-869b-41c8-9059-0579099b2287","type":"DataRange1d"}},"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cff53b8-7a2b-45d6-a794-d046540a0b7c","type":"CircleX"},{"attributes":{},"id":"33fc61e5-1d4b-4744-b451-c482465427ad","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"cc2ea36f-d1c2-42a8-a1b0-4e334c44e69a","type":"ColumnDataSource"},"glyph":{"id":"5cff53b8-7a2b-45d6-a794-d046540a0b7c","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":{"id":"a8509c1f-b906-42d2-ab51-374ce3161175","type":"CircleX"},"selection_glyph":null},"id":"5218669e-937f-4417-bcfb-32d7e8131869","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"}},"id":"e79e2844-1bb0-41bd-a4d5-42a59b41653d","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ff2ea03-bece-4e20-aff6-0ab6b6ac3bd5","type":"BasicTicker"}},"id":"c7adfc02-2c16-430d-8d40-5704cbdcb85f","type":"Grid"},{"attributes":{"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce9e978b-c764-4fb5-ae83-17b116c6f4c2","type":"BasicTicker"}},"id":"2c51ced7-1dde-4276-85b5-61b3171b30ca","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"733c0393-8132-4f08-a1e3-4a91300e42b2","type":"PanTool"},{"id":"c67c41eb-6ded-4319-b086-dc99b8df1414","type":"WheelZoomTool"},{"id":"cb1bc377-8a88-44c0-b8b8-018a2fb1c957","type":"BoxZoomTool"},{"id":"43ff6582-e0e6-48b6-835e-9eedccda7081","type":"SaveTool"},{"id":"ab8514b7-8723-448f-8566-8344740c23f1","type":"ResetTool"},{"id":"e79e2844-1bb0-41bd-a4d5-42a59b41653d","type":"HelpTool"}]},"id":"ee011f19-2fdb-4630-b1e6-2e8b008a0cd2","type":"Toolbar"},{"attributes":{"callback":null},"id":"7503e36d-7eb0-493e-a55c-47f1afa4f37e","type":"DataRange1d"},{"attributes":{"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"}},"id":"733c0393-8132-4f08-a1e3-4a91300e42b2","type":"PanTool"},{"attributes":{"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"}},"id":"c67c41eb-6ded-4319-b086-dc99b8df1414","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"23351c9d-8361-4cd9-a3ae-dab083d26e27","type":"BoxAnnotation"},"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"}},"id":"cb1bc377-8a88-44c0-b8b8-018a2fb1c957","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23351c9d-8361-4cd9-a3ae-dab083d26e27","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"9a39c223-29f7-4327-8b80-18fcc847ead9","type":"BasicTickFormatter"},"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ff2ea03-bece-4e20-aff6-0ab6b6ac3bd5","type":"BasicTicker"}},"id":"bf2e6e8a-d45b-425f-aaad-0c4abfb76f4e","type":"LinearAxis"},{"attributes":{},"id":"4ff2ea03-bece-4e20-aff6-0ab6b6ac3bd5","type":"BasicTicker"},{"attributes":{"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"}},"id":"43ff6582-e0e6-48b6-835e-9eedccda7081","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"cc2ea36f-d1c2-42a8-a1b0-4e334c44e69a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"33fc61e5-1d4b-4744-b451-c482465427ad","type":"BasicTickFormatter"},"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce9e978b-c764-4fb5-ae83-17b116c6f4c2","type":"BasicTicker"}},"id":"6fabb970-696d-4835-9e2f-05fd9dcdecc4","type":"LinearAxis"},{"attributes":{"plot":{"id":"2938ea88-d388-4017-8307-dc2f8a505d44","subtype":"Figure","type":"Plot"}},"id":"ab8514b7-8723-448f-8566-8344740c23f1","type":"ResetTool"},{"attributes":{},"id":"d5f4a248-9ebf-4571-b1ce-ea85a9ed1b12","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8509c1f-b906-42d2-ab51-374ce3161175","type":"CircleX"},{"attributes":{},"id":"ce9e978b-c764-4fb5-ae83-17b116c6f4c2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"62b00e4e-869b-41c8-9059-0579099b2287","type":"DataRange1d"}],"root_ids":["2938ea88-d388-4017-8307-dc2f8a505d44"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"79488ca4-2719-4778-9352-47be7324ce70","elementid":"54bbef4e-169c-4219-ac1b-cdab5f508e00","modelid":"2938ea88-d388-4017-8307-dc2f8a505d44"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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