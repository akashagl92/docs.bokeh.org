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
      };var element = document.getElementById("918b5d82-84b5-4437-9296-96c3d9ed0113");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '918b5d82-84b5-4437-9296-96c3d9ed0113' but no matching script tag was found. ")
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
                  var docs_json = {"7a46e304-4a40-4612-9b24-9b0fe37e49e9":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ba58662-a31a-4805-be4e-86b13d15d439","type":"BasicTicker"}},"id":"69e4337a-8695-42f4-a5d5-741eb87d3411","type":"Grid"},{"attributes":{"overlay":{"id":"b18bd3d7-5628-4cbb-b0de-f1d262c433f4","type":"BoxAnnotation"},"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"}},"id":"0f20774a-fd7c-4ee6-afdf-ef216125b2ed","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"}},"id":"102ae9ce-336a-47e6-9add-33e98137fa09","type":"SaveTool"},{"attributes":{"callback":null},"id":"14b82a65-df5d-4b79-ae2a-bf5513acc781","type":"DataRange1d"},{"attributes":{"callback":null},"id":"0c201206-eae8-4bb8-88f3-4f2ab6666a63","type":"DataRange1d"},{"attributes":{},"id":"745b0676-a650-4f4a-8fd6-f7c396132829","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e0801e0c-5132-45cf-b574-ec2a7f07daaf","type":"ColumnDataSource"},"glyph":{"id":"236077f8-9510-44fb-a47b-edd7eab1ad84","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"b6e2157e-b371-496f-87ab-2157ac403cf5","type":"Triangle"},"selection_glyph":null},"id":"9b868bf1-5fd2-415f-b527-c5868d29445c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"}},"id":"88ed40d8-851d-457c-be82-9cc2ddac9111","type":"PanTool"},{"attributes":{},"id":"16afbd1f-dab4-4d5b-bb4f-845974c6e45b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"745b0676-a650-4f4a-8fd6-f7c396132829","type":"BasicTickFormatter"},"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4d62941-c698-4332-b33b-5b7cbcac1113","type":"BasicTicker"}},"id":"a9df5784-ec06-45a0-980e-ab1879569d47","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b18bd3d7-5628-4cbb-b0de-f1d262c433f4","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"e0801e0c-5132-45cf-b574-ec2a7f07daaf","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"}},"id":"9cd6d956-d228-46ce-97ca-798bad899fd2","type":"HelpTool"},{"attributes":{"below":[{"id":"a9df5784-ec06-45a0-980e-ab1879569d47","type":"LinearAxis"}],"left":[{"id":"60657667-5cca-4ed1-88b7-ddcec4b9f2bc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a9df5784-ec06-45a0-980e-ab1879569d47","type":"LinearAxis"},{"id":"5337496c-2c41-40a6-86b2-4fb7a324bd12","type":"Grid"},{"id":"60657667-5cca-4ed1-88b7-ddcec4b9f2bc","type":"LinearAxis"},{"id":"69e4337a-8695-42f4-a5d5-741eb87d3411","type":"Grid"},{"id":"b18bd3d7-5628-4cbb-b0de-f1d262c433f4","type":"BoxAnnotation"},{"id":"9b868bf1-5fd2-415f-b527-c5868d29445c","type":"GlyphRenderer"}],"title":{"id":"666e0bfe-5875-48bb-9177-8b4d1c2d0b00","type":"Title"},"tool_events":{"id":"75de6fa8-c604-4dd9-b738-ff7cbf8d0030","type":"ToolEvents"},"toolbar":{"id":"554073b8-4f16-4b70-be7b-a54f0893a386","type":"Toolbar"},"x_range":{"id":"0c201206-eae8-4bb8-88f3-4f2ab6666a63","type":"DataRange1d"},"y_range":{"id":"14b82a65-df5d-4b79-ae2a-bf5513acc781","type":"DataRange1d"}},"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"75de6fa8-c604-4dd9-b738-ff7cbf8d0030","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"88ed40d8-851d-457c-be82-9cc2ddac9111","type":"PanTool"},{"id":"52615139-7e06-4afd-922c-9018130076b6","type":"WheelZoomTool"},{"id":"0f20774a-fd7c-4ee6-afdf-ef216125b2ed","type":"BoxZoomTool"},{"id":"102ae9ce-336a-47e6-9add-33e98137fa09","type":"SaveTool"},{"id":"b5020d82-4804-4898-83d4-7b6b5d548ae3","type":"ResetTool"},{"id":"9cd6d956-d228-46ce-97ca-798bad899fd2","type":"HelpTool"}]},"id":"554073b8-4f16-4b70-be7b-a54f0893a386","type":"Toolbar"},{"attributes":{"formatter":{"id":"16afbd1f-dab4-4d5b-bb4f-845974c6e45b","type":"BasicTickFormatter"},"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ba58662-a31a-4805-be4e-86b13d15d439","type":"BasicTicker"}},"id":"60657667-5cca-4ed1-88b7-ddcec4b9f2bc","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"666e0bfe-5875-48bb-9177-8b4d1c2d0b00","type":"Title"},{"attributes":{"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"}},"id":"b5020d82-4804-4898-83d4-7b6b5d548ae3","type":"ResetTool"},{"attributes":{},"id":"3ba58662-a31a-4805-be4e-86b13d15d439","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6e2157e-b371-496f-87ab-2157ac403cf5","type":"Triangle"},{"attributes":{},"id":"a4d62941-c698-4332-b33b-5b7cbcac1113","type":"BasicTicker"},{"attributes":{"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4d62941-c698-4332-b33b-5b7cbcac1113","type":"BasicTicker"}},"id":"5337496c-2c41-40a6-86b2-4fb7a324bd12","type":"Grid"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"236077f8-9510-44fb-a47b-edd7eab1ad84","type":"Triangle"},{"attributes":{"plot":{"id":"553da86f-62c1-4466-91c8-26c353398b07","subtype":"Figure","type":"Plot"}},"id":"52615139-7e06-4afd-922c-9018130076b6","type":"WheelZoomTool"}],"root_ids":["553da86f-62c1-4466-91c8-26c353398b07"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7a46e304-4a40-4612-9b24-9b0fe37e49e9","elementid":"918b5d82-84b5-4437-9296-96c3d9ed0113","modelid":"553da86f-62c1-4466-91c8-26c353398b07"}];
                  
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