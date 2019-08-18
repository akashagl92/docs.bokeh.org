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
      };var element = document.getElementById("8c7e0d65-64b8-4f56-8749-97213ffd5af1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8c7e0d65-64b8-4f56-8749-97213ffd5af1' but no matching script tag was found. ")
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
                  var docs_json = {"7fe076ec-4ecb-45bd-af37-77ecb9208b81":{"roots":{"references":[{"attributes":{"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"}},"id":"7cf2f171-f87b-4db8-a6ac-5bc6fa4e4125","type":"WheelZoomTool"},{"attributes":{},"id":"4bd4862c-4852-4073-980c-95db82a8e588","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"62259c0e-7fec-410a-8008-098b1d260ca4","type":"PanTool"},{"id":"7cf2f171-f87b-4db8-a6ac-5bc6fa4e4125","type":"WheelZoomTool"},{"id":"f3ee16b3-e66e-43b8-9f7f-74707a8b6623","type":"BoxZoomTool"},{"id":"0b90ed3f-1460-493b-8f37-a2ad23e26e63","type":"SaveTool"},{"id":"1551644c-48fb-4562-bc12-668105658bae","type":"ResetTool"},{"id":"a45b1932-a7db-449b-a5bc-5cfe0c2c0ae3","type":"HelpTool"}]},"id":"6946e5b5-729a-469e-96b3-9ccc4507508e","type":"Toolbar"},{"attributes":{"overlay":{"id":"935a9a15-d07d-412e-854c-1f54f514bdf6","type":"BoxAnnotation"},"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"}},"id":"f3ee16b3-e66e-43b8-9f7f-74707a8b6623","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bd4862c-4852-4073-980c-95db82a8e588","type":"BasicTicker"}},"id":"5349c8c1-4ca4-4225-a58c-794ae72c2a41","type":"Grid"},{"attributes":{"callback":null},"id":"6c4477c4-4c07-4247-ac86-ec268e9a143b","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9cdd5f60-f04d-4f27-8dce-1b470a3731e8","type":"SquareCross"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"935a9a15-d07d-412e-854c-1f54f514bdf6","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"d5165834-403b-42ed-adad-b7f27077bdd0","type":"ColumnDataSource"},{"attributes":{},"id":"c69bc5a9-503d-4cfd-8895-169af6209608","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"}},"id":"0b90ed3f-1460-493b-8f37-a2ad23e26e63","type":"SaveTool"},{"attributes":{"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"}},"id":"a45b1932-a7db-449b-a5bc-5cfe0c2c0ae3","type":"HelpTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23134786-e0c5-4ff6-82b4-867d58040b14","type":"SquareCross"},{"attributes":{"formatter":{"id":"c69bc5a9-503d-4cfd-8895-169af6209608","type":"BasicTickFormatter"},"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0076dee-efcb-4143-88e0-f2006e391d36","type":"BasicTicker"}},"id":"1062a572-088f-41fc-aafd-d8b761faefee","type":"LinearAxis"},{"attributes":{"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"}},"id":"1551644c-48fb-4562-bc12-668105658bae","type":"ResetTool"},{"attributes":{"below":[{"id":"e2f2f6e1-119f-4fb0-9d72-d1610ed1b825","type":"LinearAxis"}],"left":[{"id":"1062a572-088f-41fc-aafd-d8b761faefee","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e2f2f6e1-119f-4fb0-9d72-d1610ed1b825","type":"LinearAxis"},{"id":"5349c8c1-4ca4-4225-a58c-794ae72c2a41","type":"Grid"},{"id":"1062a572-088f-41fc-aafd-d8b761faefee","type":"LinearAxis"},{"id":"01929992-5b37-43e2-ad55-172165bcd479","type":"Grid"},{"id":"935a9a15-d07d-412e-854c-1f54f514bdf6","type":"BoxAnnotation"},{"id":"c02b2263-cdb0-4cb2-a020-c06dbf820ec9","type":"GlyphRenderer"}],"title":{"id":"c5f1b4e9-3e10-4080-b4fc-b52cf5e8229e","type":"Title"},"tool_events":{"id":"1fdf9556-2d3a-4ac3-b17c-05e2c63d200c","type":"ToolEvents"},"toolbar":{"id":"6946e5b5-729a-469e-96b3-9ccc4507508e","type":"Toolbar"},"x_range":{"id":"6c4477c4-4c07-4247-ac86-ec268e9a143b","type":"DataRange1d"},"y_range":{"id":"499cb553-02aa-4144-b840-4f4648ef5f30","type":"DataRange1d"}},"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7eac10e0-2e36-40f2-adcb-8811b249f089","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"}},"id":"62259c0e-7fec-410a-8008-098b1d260ca4","type":"PanTool"},{"attributes":{"formatter":{"id":"7eac10e0-2e36-40f2-adcb-8811b249f089","type":"BasicTickFormatter"},"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bd4862c-4852-4073-980c-95db82a8e588","type":"BasicTicker"}},"id":"e2f2f6e1-119f-4fb0-9d72-d1610ed1b825","type":"LinearAxis"},{"attributes":{},"id":"a0076dee-efcb-4143-88e0-f2006e391d36","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d5165834-403b-42ed-adad-b7f27077bdd0","type":"ColumnDataSource"},"glyph":{"id":"23134786-e0c5-4ff6-82b4-867d58040b14","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":{"id":"9cdd5f60-f04d-4f27-8dce-1b470a3731e8","type":"SquareCross"},"selection_glyph":null},"id":"c02b2263-cdb0-4cb2-a020-c06dbf820ec9","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0076dee-efcb-4143-88e0-f2006e391d36","type":"BasicTicker"}},"id":"01929992-5b37-43e2-ad55-172165bcd479","type":"Grid"},{"attributes":{},"id":"1fdf9556-2d3a-4ac3-b17c-05e2c63d200c","type":"ToolEvents"},{"attributes":{"callback":null},"id":"499cb553-02aa-4144-b840-4f4648ef5f30","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"c5f1b4e9-3e10-4080-b4fc-b52cf5e8229e","type":"Title"}],"root_ids":["2fd777ff-2baf-45d6-9dcc-aa96e67e0f82"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"7fe076ec-4ecb-45bd-af37-77ecb9208b81","elementid":"8c7e0d65-64b8-4f56-8749-97213ffd5af1","modelid":"2fd777ff-2baf-45d6-9dcc-aa96e67e0f82"}];
                  
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