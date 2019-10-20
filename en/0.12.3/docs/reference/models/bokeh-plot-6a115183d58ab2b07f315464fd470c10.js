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
      };var element = document.getElementById("5fd01551-c0ed-4391-890e-ef8c1cc436cd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fd01551-c0ed-4391-890e-ef8c1cc436cd' but no matching script tag was found. ")
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
                  var docs_json = {"1113c03f-4523-4aba-a357-8c0b01070ce2":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"0b7be7bd-fd50-4ae3-9781-f01b1c9d47ad","type":"Plot"},"ticker":{"id":"ea3b0d6b-ce1d-4a4a-b34c-e7bc73845ac3","type":"BasicTicker"}},"id":"bf21d2d2-c7de-4051-8c85-f8cb2e339737","type":"Grid"},{"attributes":{},"id":"7a1f8ad3-fdf3-4ef8-a964-e2c5cef87700","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3eb7bbb0-e000-42f8-9a8f-b133cdac39f1","type":"ColumnDataSource"},"glyph":{"id":"869ca29d-03ad-4614-8c7a-b865620edd6c","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2819b1c6-e340-4363-8c25-99fe59851273","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0b7be7bd-fd50-4ae3-9781-f01b1c9d47ad","type":"Plot"},"ticker":{"id":"97b174f0-3263-446e-84bd-eda8bfa94cfc","type":"BasicTicker"}},"id":"99238efa-b695-48d2-8501-2e8cb6ddfdd0","type":"Grid"},{"attributes":{},"id":"5646bcae-a660-4a00-be98-e12a72493808","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"fdbe9083-5ec7-4d63-bea6-aa44bbaea1dc","type":"DataRange1d"},{"attributes":{},"id":"ea3b0d6b-ce1d-4a4a-b34c-e7bc73845ac3","type":"BasicTicker"},{"attributes":{},"id":"97b174f0-3263-446e-84bd-eda8bfa94cfc","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["xm01","y","ym01","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1]}},"id":"3eb7bbb0-e000-42f8-9a8f-b133cdac39f1","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b8a7889c-2570-4a8a-b9c3-0e2f33de3b7d","type":"Toolbar"},{"attributes":{},"id":"c3476789-e7da-4842-9984-a8ce882ab192","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"869ca29d-03ad-4614-8c7a-b865620edd6c","type":"Segment"},{"attributes":{"formatter":{"id":"7a1f8ad3-fdf3-4ef8-a964-e2c5cef87700","type":"BasicTickFormatter"},"plot":{"id":"0b7be7bd-fd50-4ae3-9781-f01b1c9d47ad","type":"Plot"},"ticker":{"id":"ea3b0d6b-ce1d-4a4a-b34c-e7bc73845ac3","type":"BasicTicker"}},"id":"7fc6e995-83ca-4e60-93dc-deb88b54f9c6","type":"LinearAxis"},{"attributes":{"formatter":{"id":"5646bcae-a660-4a00-be98-e12a72493808","type":"BasicTickFormatter"},"plot":{"id":"0b7be7bd-fd50-4ae3-9781-f01b1c9d47ad","type":"Plot"},"ticker":{"id":"97b174f0-3263-446e-84bd-eda8bfa94cfc","type":"BasicTicker"}},"id":"df4b2e4d-ce5d-41ba-aa6d-37e99b3d9b98","type":"LinearAxis"},{"attributes":{"callback":null},"id":"f3dbd52d-8ac3-4fae-b522-0252550c94de","type":"DataRange1d"},{"attributes":{"below":[{"id":"df4b2e4d-ce5d-41ba-aa6d-37e99b3d9b98","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7fc6e995-83ca-4e60-93dc-deb88b54f9c6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2819b1c6-e340-4363-8c25-99fe59851273","type":"GlyphRenderer"},{"id":"df4b2e4d-ce5d-41ba-aa6d-37e99b3d9b98","type":"LinearAxis"},{"id":"7fc6e995-83ca-4e60-93dc-deb88b54f9c6","type":"LinearAxis"},{"id":"99238efa-b695-48d2-8501-2e8cb6ddfdd0","type":"Grid"},{"id":"bf21d2d2-c7de-4051-8c85-f8cb2e339737","type":"Grid"}],"title":null,"tool_events":{"id":"c3476789-e7da-4842-9984-a8ce882ab192","type":"ToolEvents"},"toolbar":{"id":"b8a7889c-2570-4a8a-b9c3-0e2f33de3b7d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fdbe9083-5ec7-4d63-bea6-aa44bbaea1dc","type":"DataRange1d"},"y_range":{"id":"f3dbd52d-8ac3-4fae-b522-0252550c94de","type":"DataRange1d"}},"id":"0b7be7bd-fd50-4ae3-9781-f01b1c9d47ad","type":"Plot"}],"root_ids":["0b7be7bd-fd50-4ae3-9781-f01b1c9d47ad"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"1113c03f-4523-4aba-a357-8c0b01070ce2","elementid":"5fd01551-c0ed-4391-890e-ef8c1cc436cd","modelid":"0b7be7bd-fd50-4ae3-9781-f01b1c9d47ad"}];
                  
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