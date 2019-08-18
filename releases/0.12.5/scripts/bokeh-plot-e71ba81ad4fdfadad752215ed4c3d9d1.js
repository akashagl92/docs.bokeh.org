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
      };var element = document.getElementById("379b5927-694f-48f9-b9f2-01a54de8727e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '379b5927-694f-48f9-b9f2-01a54de8727e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"32065f70-41d2-434b-b0ea-2c39934d4291":{"roots":{"references":[{"attributes":{"formatter":{"id":"cb29dbbd-b575-45a4-bb5f-50482d7e3b2b","type":"BasicTickFormatter"},"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"667276d0-411d-4eac-b60e-7409bf2024b1","type":"BasicTicker"}},"id":"6a7f44c8-1b44-45f6-8c61-0795cd983ec2","type":"LinearAxis"},{"attributes":{"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"}},"id":"31eed739-14e9-46a8-9b3f-64cf68f163d4","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9d49c150-00bb-436e-bcec-5bfa2b65a42f","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d9c4e485-8424-4e78-acf0-c972a6a676f3","type":"PanTool"},{"id":"31eed739-14e9-46a8-9b3f-64cf68f163d4","type":"WheelZoomTool"},{"id":"d51da118-04ef-4a68-bd50-e81a597d3030","type":"BoxZoomTool"},{"id":"d26c84ce-c651-47c9-a870-805e7ad0f00c","type":"SaveTool"},{"id":"55c79b3c-8443-4c31-89fb-93e8dbeec6a9","type":"ResetTool"},{"id":"84f530f1-4529-47e0-8635-e589b0371482","type":"HelpTool"}]},"id":"4b4cdb8e-0546-42c9-a837-7f131563c472","type":"Toolbar"},{"attributes":{"formatter":{"id":"e8ce4bc2-0b11-4480-a93f-dd3c7a6d08b9","type":"BasicTickFormatter"},"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fc846f7-dacd-49ed-abd7-39610b426f49","type":"BasicTicker"}},"id":"6b09b65e-22d6-4747-925e-c6ba6a2fe110","type":"LinearAxis"},{"attributes":{"below":[{"id":"6b09b65e-22d6-4747-925e-c6ba6a2fe110","type":"LinearAxis"}],"left":[{"id":"6a7f44c8-1b44-45f6-8c61-0795cd983ec2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6b09b65e-22d6-4747-925e-c6ba6a2fe110","type":"LinearAxis"},{"id":"a76a816a-8778-4288-bf0f-d0f0b5489037","type":"Grid"},{"id":"6a7f44c8-1b44-45f6-8c61-0795cd983ec2","type":"LinearAxis"},{"id":"95e21c9a-7381-4ec2-8eca-ebc935474e77","type":"Grid"},{"id":"9736d310-8cee-4655-b2b8-82c97947fde5","type":"BoxAnnotation"},{"id":"7b7e3873-4542-40f6-85f0-1a222d109b79","type":"GlyphRenderer"}],"title":{"id":"d4ff0a63-db7a-4f7b-96f4-e8b72e2d51d7","type":"Title"},"title_location":"left","tool_events":{"id":"94e25cb8-14ca-403c-a90c-ee8d75ed8729","type":"ToolEvents"},"toolbar":{"id":"4b4cdb8e-0546-42c9-a837-7f131563c472","type":"Toolbar"},"x_range":{"id":"c5c81861-cfcf-496f-92b1-79674f851a69","type":"DataRange1d"},"y_range":{"id":"b42a9f08-8307-48ba-88c8-3124aa1dab1a","type":"DataRange1d"}},"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e8ce4bc2-0b11-4480-a93f-dd3c7a6d08b9","type":"BasicTickFormatter"},{"attributes":{},"id":"4fc846f7-dacd-49ed-abd7-39610b426f49","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"56cb8b6e-5cc3-4259-a665-d808e7e5ffb0","type":"Circle"},{"attributes":{"callback":null},"id":"b42a9f08-8307-48ba-88c8-3124aa1dab1a","type":"DataRange1d"},{"attributes":{},"id":"cb29dbbd-b575-45a4-bb5f-50482d7e3b2b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"}},"id":"d9c4e485-8424-4e78-acf0-c972a6a676f3","type":"PanTool"},{"attributes":{},"id":"667276d0-411d-4eac-b60e-7409bf2024b1","type":"BasicTicker"},{"attributes":{},"id":"94e25cb8-14ca-403c-a90c-ee8d75ed8729","type":"ToolEvents"},{"attributes":{"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"}},"id":"d26c84ce-c651-47c9-a870-805e7ad0f00c","type":"SaveTool"},{"attributes":{"callback":null},"id":"c5c81861-cfcf-496f-92b1-79674f851a69","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9736d310-8cee-4655-b2b8-82c97947fde5","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Left Title"},"id":"d4ff0a63-db7a-4f7b-96f4-e8b72e2d51d7","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"667276d0-411d-4eac-b60e-7409bf2024b1","type":"BasicTicker"}},"id":"95e21c9a-7381-4ec2-8eca-ebc935474e77","type":"Grid"},{"attributes":{"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fc846f7-dacd-49ed-abd7-39610b426f49","type":"BasicTicker"}},"id":"a76a816a-8778-4288-bf0f-d0f0b5489037","type":"Grid"},{"attributes":{"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"}},"id":"55c79b3c-8443-4c31-89fb-93e8dbeec6a9","type":"ResetTool"},{"attributes":{"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"}},"id":"84f530f1-4529-47e0-8635-e589b0371482","type":"HelpTool"},{"attributes":{"data_source":{"id":"ee66021a-88e3-47b3-8e47-8ac05a6f9552","type":"ColumnDataSource"},"glyph":{"id":"9d49c150-00bb-436e-bcec-5bfa2b65a42f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56cb8b6e-5cc3-4259-a665-d808e7e5ffb0","type":"Circle"},"selection_glyph":null},"id":"7b7e3873-4542-40f6-85f0-1a222d109b79","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"ee66021a-88e3-47b3-8e47-8ac05a6f9552","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"9736d310-8cee-4655-b2b8-82c97947fde5","type":"BoxAnnotation"},"plot":{"id":"ed925b52-7504-4fcb-a710-4b5fb13d9efa","subtype":"Figure","type":"Plot"}},"id":"d51da118-04ef-4a68-bd50-e81a597d3030","type":"BoxZoomTool"}],"root_ids":["ed925b52-7504-4fcb-a710-4b5fb13d9efa"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"32065f70-41d2-434b-b0ea-2c39934d4291","elementid":"379b5927-694f-48f9-b9f2-01a54de8727e","modelid":"ed925b52-7504-4fcb-a710-4b5fb13d9efa"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
