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
      };var element = document.getElementById("e3582521-e57f-40dd-878e-775f0ebde25a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e3582521-e57f-40dd-878e-775f0ebde25a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"3dc61771-9091-4a6f-9e7f-505b1d6655ef":{"roots":{"references":[{"attributes":{"callback":null},"id":"34638058-6e73-4fe0-b12f-e9668f287994","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"},"ticker":{"id":"e08595e4-de00-49aa-b832-840191c0d7da","type":"BasicTicker"}},"id":"803e386c-4da0-45f5-bf3c-2bdabe1477d6","type":"Grid"},{"attributes":{"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1daec43-826d-46b6-92c6-e1d8ed96b5cc","type":"BasicTicker"}},"id":"1577eee1-d801-4e5f-bf9a-b3fa71a8e588","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"598815f6-1efd-4435-aacc-265fdfb3d9ef","type":"PanTool"},{"id":"e5054ae8-e5d4-4f8a-b525-c0620d4d27b5","type":"WheelZoomTool"},{"id":"562a3c9a-9c2d-415f-a6e9-74c4b8fed355","type":"BoxZoomTool"},{"id":"fac99fbb-7300-4fc9-a873-a08c873c4b65","type":"SaveTool"},{"id":"3a72de94-3183-4665-859d-95948c23e01e","type":"ResetTool"},{"id":"c78472d2-d5c0-4f52-b989-c9acd17f2dc3","type":"HelpTool"}]},"id":"bfefd5ae-c61a-4953-be79-3e883b90212e","type":"Toolbar"},{"attributes":{},"id":"e08595e4-de00-49aa-b832-840191c0d7da","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"d500ec77-6406-4841-9635-eb62dcdef5b0","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b01c1819-52a1-45c6-ae17-80634606b4d2","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"7348ebba-0e81-4e3a-b973-f84903663f8c","type":"BasicTickFormatter"},"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"},"ticker":{"id":"e08595e4-de00-49aa-b832-840191c0d7da","type":"BasicTicker"}},"id":"c25b8398-237d-4f03-8c90-55d9e722dad5","type":"LinearAxis"},{"attributes":{"formatter":{"id":"7ef13411-e75c-4647-8283-700964ec134f","type":"BasicTickFormatter"},"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1daec43-826d-46b6-92c6-e1d8ed96b5cc","type":"BasicTicker"}},"id":"ea8bbe2e-dd2f-4a0c-8a84-a8c387912ec5","type":"LinearAxis"},{"attributes":{"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"}},"id":"598815f6-1efd-4435-aacc-265fdfb3d9ef","type":"PanTool"},{"attributes":{"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"}},"id":"3a72de94-3183-4665-859d-95948c23e01e","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"ce90b7e6-dc98-4445-bcd1-c8cc6f6fbca0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"}},"id":"c78472d2-d5c0-4f52-b989-c9acd17f2dc3","type":"HelpTool"},{"attributes":{"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"}},"id":"fac99fbb-7300-4fc9-a873-a08c873c4b65","type":"SaveTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b803aa4e-2b0a-4746-afb2-21562c5b544f","type":"Circle"},{"attributes":{},"id":"64f05a41-02f8-4b79-acaf-577570371149","type":"ToolEvents"},{"attributes":{},"id":"f1daec43-826d-46b6-92c6-e1d8ed96b5cc","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b8bc4455-7bcf-4564-9ec6-c43fe7d898ee","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"758f029a-6fee-404b-9a43-64355499b7e3","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e0ee592-0264-4835-b2c3-6bf158832df6","type":"Circle"},{"attributes":{"data_source":{"id":"ce90b7e6-dc98-4445-bcd1-c8cc6f6fbca0","type":"ColumnDataSource"},"glyph":{"id":"758f029a-6fee-404b-9a43-64355499b7e3","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"02c2f548-0a05-4afd-9d04-d5bf605f92a7","type":"Line"},"selection_glyph":null},"id":"7e978a9b-c440-4faa-bb46-b097df085696","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"}},"id":"e5054ae8-e5d4-4f8a-b525-c0620d4d27b5","type":"WheelZoomTool"},{"attributes":{},"id":"7348ebba-0e81-4e3a-b973-f84903663f8c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d500ec77-6406-4841-9635-eb62dcdef5b0","type":"ColumnDataSource"},"glyph":{"id":"b803aa4e-2b0a-4746-afb2-21562c5b544f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"4e0ee592-0264-4835-b2c3-6bf158832df6","type":"Circle"},"selection_glyph":null},"id":"bd0684cc-73c5-4e00-82e1-f03c82bc2c81","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"02c2f548-0a05-4afd-9d04-d5bf605f92a7","type":"Line"},{"attributes":{"plot":null,"text":"example"},"id":"41bc8f16-1e27-4f26-816b-8fcae7c4a0dd","type":"Title"},{"attributes":{},"id":"7ef13411-e75c-4647-8283-700964ec134f","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ea8bbe2e-dd2f-4a0c-8a84-a8c387912ec5","type":"LinearAxis"}],"left":[{"id":"c25b8398-237d-4f03-8c90-55d9e722dad5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ea8bbe2e-dd2f-4a0c-8a84-a8c387912ec5","type":"LinearAxis"},{"id":"1577eee1-d801-4e5f-bf9a-b3fa71a8e588","type":"Grid"},{"id":"c25b8398-237d-4f03-8c90-55d9e722dad5","type":"LinearAxis"},{"id":"803e386c-4da0-45f5-bf3c-2bdabe1477d6","type":"Grid"},{"id":"b01c1819-52a1-45c6-ae17-80634606b4d2","type":"BoxAnnotation"},{"id":"7e978a9b-c440-4faa-bb46-b097df085696","type":"GlyphRenderer"},{"id":"bd0684cc-73c5-4e00-82e1-f03c82bc2c81","type":"GlyphRenderer"}],"title":{"id":"41bc8f16-1e27-4f26-816b-8fcae7c4a0dd","type":"Title"},"tool_events":{"id":"64f05a41-02f8-4b79-acaf-577570371149","type":"ToolEvents"},"toolbar":{"id":"bfefd5ae-c61a-4953-be79-3e883b90212e","type":"Toolbar"},"x_range":{"id":"34638058-6e73-4fe0-b12f-e9668f287994","type":"DataRange1d"},"y_range":{"id":"b8bc4455-7bcf-4564-9ec6-c43fe7d898ee","type":"DataRange1d"}},"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"b01c1819-52a1-45c6-ae17-80634606b4d2","type":"BoxAnnotation"},"plot":{"id":"51df06d0-d634-419e-a0c6-67805e127455","subtype":"Figure","type":"Plot"}},"id":"562a3c9a-9c2d-415f-a6e9-74c4b8fed355","type":"BoxZoomTool"}],"root_ids":["51df06d0-d634-419e-a0c6-67805e127455"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"3dc61771-9091-4a6f-9e7f-505b1d6655ef","elementid":"e3582521-e57f-40dd-878e-775f0ebde25a","modelid":"51df06d0-d634-419e-a0c6-67805e127455"}];
              
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