(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("b5844dd4-5dd4-4681-b4c2-7a9a2a46d9c8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b5844dd4-5dd4-4681-b4c2-7a9a2a46d9c8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"02c17f88-3114-44ac-a34e-974c676a7e99":{"roots":{"references":[{"attributes":{"data_source":{"id":"291a8f2d-9c96-4797-8e50-0543a46fc3d6","type":"ColumnDataSource"},"glyph":{"id":"021c9c59-3874-4d66-8e50-a8be0940ecfa","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ae6056d1-f65a-491c-9287-340762dfacf7","type":"Line"},"selection_glyph":null,"view":{"id":"849c4a37-08a7-4d5c-a0b5-50108830389c","type":"CDSView"}},"id":"a3d9551f-7534-42ca-9344-999f5aceb6d1","type":"GlyphRenderer"},{"attributes":{},"id":"feebfc6b-9ef5-4529-b785-94cc2403c274","type":"SaveTool"},{"attributes":{"source":{"id":"291a8f2d-9c96-4797-8e50-0543a46fc3d6","type":"ColumnDataSource"}},"id":"849c4a37-08a7-4d5c-a0b5-50108830389c","type":"CDSView"},{"attributes":{},"id":"2aa5c9b4-e6a4-4fe0-8f82-79f00214c979","type":"ResetTool"},{"attributes":{},"id":"86fc5228-3d55-4235-b126-4cfee79666b1","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae6056d1-f65a-491c-9287-340762dfacf7","type":"Line"},{"attributes":{"plot":null,"text":"simple line example"},"id":"9fe24780-0e9d-4b75-961f-84bffc99963f","type":"Title"},{"attributes":{},"id":"e3a3a535-d982-4f83-a66c-883ba86eeb0e","type":"LinearScale"},{"attributes":{"items":[{"id":"ea07eef6-751b-4a92-8c7d-d9fb420e210b","type":"LegendItem"}],"plot":{"id":"26481901-dea7-4dee-ac7e-334d50e21cd0","subtype":"Figure","type":"Plot"}},"id":"0aea7124-1604-4602-8530-0b01a0942d44","type":"Legend"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"021c9c59-3874-4d66-8e50-a8be0940ecfa","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ad81daf-97ba-4c14-945e-f3b3c3d5ebdd","type":"PanTool"},{"id":"7bc0218b-7fe3-4f78-84e5-4275b9688746","type":"WheelZoomTool"},{"id":"a3b8c4d7-137b-47eb-b738-6d4b711eb2c4","type":"BoxZoomTool"},{"id":"feebfc6b-9ef5-4529-b785-94cc2403c274","type":"SaveTool"},{"id":"2aa5c9b4-e6a4-4fe0-8f82-79f00214c979","type":"ResetTool"},{"id":"86fc5228-3d55-4235-b126-4cfee79666b1","type":"HelpTool"}]},"id":"062955e2-876f-456d-b574-12c656bc5743","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"291a8f2d-9c96-4797-8e50-0543a46fc3d6","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"d36939d3-f572-4c61-b3f0-507bf174935f","type":"BoxAnnotation"}},"id":"a3b8c4d7-137b-47eb-b738-6d4b711eb2c4","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"a219571a-3010-4bfd-83f2-8400cf6cd479","type":"DataRange1d"},{"attributes":{"below":[{"id":"67912a48-f862-4043-8026-4ef0fe2c33a1","type":"LinearAxis"}],"left":[{"id":"3cf18ded-4076-4b3a-bd22-d35f3bf8a9a4","type":"LinearAxis"}],"renderers":[{"id":"67912a48-f862-4043-8026-4ef0fe2c33a1","type":"LinearAxis"},{"id":"fba03be3-840a-4dce-a1aa-5e8f20ba6ae5","type":"Grid"},{"id":"3cf18ded-4076-4b3a-bd22-d35f3bf8a9a4","type":"LinearAxis"},{"id":"074aaf53-7e99-4c81-871c-3d6dee8e8761","type":"Grid"},{"id":"d36939d3-f572-4c61-b3f0-507bf174935f","type":"BoxAnnotation"},{"id":"0aea7124-1604-4602-8530-0b01a0942d44","type":"Legend"},{"id":"a3d9551f-7534-42ca-9344-999f5aceb6d1","type":"GlyphRenderer"}],"title":{"id":"9fe24780-0e9d-4b75-961f-84bffc99963f","type":"Title"},"toolbar":{"id":"062955e2-876f-456d-b574-12c656bc5743","type":"Toolbar"},"x_range":{"id":"a219571a-3010-4bfd-83f2-8400cf6cd479","type":"DataRange1d"},"x_scale":{"id":"850b6226-05cf-4ac0-8340-0d8d9db80244","type":"LinearScale"},"y_range":{"id":"6ab673e4-0e2a-4c71-be09-b00273909caf","type":"DataRange1d"},"y_scale":{"id":"e3a3a535-d982-4f83-a66c-883ba86eeb0e","type":"LinearScale"}},"id":"26481901-dea7-4dee-ac7e-334d50e21cd0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9ad81daf-97ba-4c14-945e-f3b3c3d5ebdd","type":"PanTool"},{"attributes":{"axis_label":"y","formatter":{"id":"61befa72-b70e-4015-8644-51f784e8a761","type":"BasicTickFormatter"},"plot":{"id":"26481901-dea7-4dee-ac7e-334d50e21cd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d45d291f-d0de-4a88-b5c7-edc7c4948a0f","type":"BasicTicker"}},"id":"3cf18ded-4076-4b3a-bd22-d35f3bf8a9a4","type":"LinearAxis"},{"attributes":{},"id":"7bc0218b-7fe3-4f78-84e5-4275b9688746","type":"WheelZoomTool"},{"attributes":{},"id":"d45d291f-d0de-4a88-b5c7-edc7c4948a0f","type":"BasicTicker"},{"attributes":{},"id":"850b6226-05cf-4ac0-8340-0d8d9db80244","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"26481901-dea7-4dee-ac7e-334d50e21cd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d45d291f-d0de-4a88-b5c7-edc7c4948a0f","type":"BasicTicker"}},"id":"074aaf53-7e99-4c81-871c-3d6dee8e8761","type":"Grid"},{"attributes":{},"id":"706ccda6-0f86-4ae3-8c0e-1c5b6352112e","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"a3d9551f-7534-42ca-9344-999f5aceb6d1","type":"GlyphRenderer"}]},"id":"ea07eef6-751b-4a92-8c7d-d9fb420e210b","type":"LegendItem"},{"attributes":{"callback":null},"id":"6ab673e4-0e2a-4c71-be09-b00273909caf","type":"DataRange1d"},{"attributes":{"axis_label":"x","formatter":{"id":"706ccda6-0f86-4ae3-8c0e-1c5b6352112e","type":"BasicTickFormatter"},"plot":{"id":"26481901-dea7-4dee-ac7e-334d50e21cd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5739f9e-5ef2-4fae-b172-a5e36844dd85","type":"BasicTicker"}},"id":"67912a48-f862-4043-8026-4ef0fe2c33a1","type":"LinearAxis"},{"attributes":{},"id":"d5739f9e-5ef2-4fae-b172-a5e36844dd85","type":"BasicTicker"},{"attributes":{},"id":"61befa72-b70e-4015-8644-51f784e8a761","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d36939d3-f572-4c61-b3f0-507bf174935f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"26481901-dea7-4dee-ac7e-334d50e21cd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5739f9e-5ef2-4fae-b172-a5e36844dd85","type":"BasicTicker"}},"id":"fba03be3-840a-4dce-a1aa-5e8f20ba6ae5","type":"Grid"}],"root_ids":["26481901-dea7-4dee-ac7e-334d50e21cd0"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"02c17f88-3114-44ac-a34e-974c676a7e99","elementid":"b5844dd4-5dd4-4681-b4c2-7a9a2a46d9c8","modelid":"26481901-dea7-4dee-ac7e-334d50e21cd0"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
