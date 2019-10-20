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
      };var element = document.getElementById("07ee8968-5d67-4d3c-a348-1051b286992c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07ee8968-5d67-4d3c-a348-1051b286992c' but no matching script tag was found. ")
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
                var docs_json = {"7208f3cf-eaf1-4596-ae02-5f423553654b":{"roots":{"references":[{"attributes":{"axis_label":"particles","formatter":{"id":"f73648dd-d3f1-4839-a0f0-85ace6d27e23","type":"LogTickFormatter"},"plot":{"id":"33b7fd8a-4754-4ed4-8164-b21d75e163aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"271f27b7-9bb2-498d-88df-9d15951a2479","type":"LogTicker"}},"id":"7a1a10dc-74fd-4d25-adcc-032f5835b2f9","type":"LogAxis"},{"attributes":{},"id":"8862f6c1-c85f-4973-9545-b309020b1b04","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"33b7fd8a-4754-4ed4-8164-b21d75e163aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"271f27b7-9bb2-498d-88df-9d15951a2479","type":"LogTicker"}},"id":"eece7ff2-98ef-4b46-86d9-b333b48bf504","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c7e7fb7-011c-4fcd-bdb9-9bccda193a5c","type":"Circle"},{"attributes":{},"id":"5ecf2126-76d1-401d-9b8b-c0bc46415f00","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"0d3e3bce-d85d-4db6-80bf-1ac83ae7d4fb","type":"GlyphRenderer"}]},"id":"9dcacc22-2b5d-4afe-958a-82e3f83b0549","type":"LegendItem"},{"attributes":{},"id":"4130e42a-fd78-4d36-8e15-863d3adefce6","type":"LogScale"},{"attributes":{"source":{"id":"918d1e51-7a5a-4645-a59f-f9b32a272f62","type":"ColumnDataSource"}},"id":"17b99998-0cd1-4236-92c1-81ec371ecf7b","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a8097c2-7ca2-44f7-b8f6-e4b56a924086","type":"Line"},{"attributes":{"data_source":{"id":"918d1e51-7a5a-4645-a59f-f9b32a272f62","type":"ColumnDataSource"},"glyph":{"id":"449d43d3-38cc-49cf-8785-52d35f2781ba","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9eeff177-7f20-4016-a43b-9653fdec8997","type":"Line"},"selection_glyph":null,"view":{"id":"17b99998-0cd1-4236-92c1-81ec371ecf7b","type":"CDSView"}},"id":"037d8f1a-bc3e-44fd-b909-4bf355c1fd4b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b2a0f409-de48-494f-a803-98e811c7008e","type":"ColumnDataSource"},"glyph":{"id":"c5aa1735-036c-4280-a73a-2fd705620337","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6dc65a6f-50fa-4455-81d6-a7f2d9212739","type":"Circle"},"selection_glyph":null,"view":{"id":"79035713-1391-4b9a-83c5-e59f17621844","type":"CDSView"}},"id":"d46fc3f7-c7be-4c0e-8819-6c45b4ad51d4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"33b7fd8a-4754-4ed4-8164-b21d75e163aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a406f54-5194-4d21-9913-d95db686d28b","type":"BasicTicker"}},"id":"d03dcb3e-c8ac-432a-88b7-e78e49be9732","type":"Grid"},{"attributes":{"source":{"id":"b2a0f409-de48-494f-a803-98e811c7008e","type":"ColumnDataSource"}},"id":"79035713-1391-4b9a-83c5-e59f17621844","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"a1f2a6a5-98ab-49c3-ac27-6ba179342c94","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"2f97a12d-6149-4847-a7e2-94bc77171abb","type":"BoxAnnotation"}},"id":"24261b21-b672-428b-bfe3-f7efba51ed4c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"88267f71-34cd-4f99-a685-53e28c17f730","type":"ColumnDataSource"},{"attributes":{"source":{"id":"cd03c013-cebc-4987-a43b-ac413fd3d65c","type":"ColumnDataSource"}},"id":"647d511e-0f8c-4ae2-920e-eff66c534353","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"cd03c013-cebc-4987-a43b-ac413fd3d65c","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f52edf82-059b-4699-a411-606001c0f444","type":"Line"},{"attributes":{"ticker":null},"id":"f73648dd-d3f1-4839-a0f0-85ace6d27e23","type":"LogTickFormatter"},{"attributes":{"data_source":{"id":"88267f71-34cd-4f99-a685-53e28c17f730","type":"ColumnDataSource"},"glyph":{"id":"4aaebb05-8c27-4cd1-b9c9-8346afb1338c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c7e7fb7-011c-4fcd-bdb9-9bccda193a5c","type":"Circle"},"selection_glyph":null,"view":{"id":"ba5ed15d-dcaa-4220-9a1d-d4446fd93678","type":"CDSView"}},"id":"df7759d9-6b43-4995-a2b0-4baac48d87d7","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"037d8f1a-bc3e-44fd-b909-4bf355c1fd4b","type":"GlyphRenderer"}]},"id":"cdc203aa-51ef-4bb4-a4a1-f4ce4d714ddd","type":"LegendItem"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"c492c769-0251-484a-9815-9daa0ef65b85","type":"Line"},{"attributes":{},"id":"4a406f54-5194-4d21-9913-d95db686d28b","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"918d1e51-7a5a-4645-a59f-f9b32a272f62","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"95ed0d14-d92b-46aa-bc01-f79138765b55","type":"PanTool"},{"id":"24261b21-b672-428b-bfe3-f7efba51ed4c","type":"BoxZoomTool"},{"id":"99b8c2f2-2577-47a1-80ca-abcfa6780dea","type":"ResetTool"},{"id":"8862f6c1-c85f-4973-9545-b309020b1b04","type":"SaveTool"}]},"id":"d4b314c9-1ea6-421f-8b2f-519c0dd492c8","type":"Toolbar"},{"attributes":{"items":[{"id":"19323028-f911-4511-a2ec-578cd3def3b9","type":"LegendItem"},{"id":"9dcacc22-2b5d-4afe-958a-82e3f83b0549","type":"LegendItem"},{"id":"41bdd9f9-3275-48fb-92f6-08239850f450","type":"LegendItem"},{"id":"cdc203aa-51ef-4bb4-a4a1-f4ce4d714ddd","type":"LegendItem"}],"plot":{"id":"33b7fd8a-4754-4ed4-8164-b21d75e163aa","subtype":"Figure","type":"Plot"}},"id":"809e8fff-f9c1-4b96-a3e2-e367ddd5a658","type":"Legend"},{"attributes":{},"id":"99b8c2f2-2577-47a1-80ca-abcfa6780dea","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"6dc65a6f-50fa-4455-81d6-a7f2d9212739","type":"Circle"},{"attributes":{"data_source":{"id":"d61e193a-9867-4d78-9dd7-58f740af3da4","type":"ColumnDataSource"},"glyph":{"id":"af3c3672-8821-4ed6-9988-93915cdca063","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c492c769-0251-484a-9815-9daa0ef65b85","type":"Line"},"selection_glyph":null,"view":{"id":"17524231-886a-44dd-8b6d-50caeb2a480f","type":"CDSView"}},"id":"0d3e3bce-d85d-4db6-80bf-1ac83ae7d4fb","type":"GlyphRenderer"},{"attributes":{"axis_label":"sections","formatter":{"id":"5ecf2126-76d1-401d-9b8b-c0bc46415f00","type":"BasicTickFormatter"},"plot":{"id":"33b7fd8a-4754-4ed4-8164-b21d75e163aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a406f54-5194-4d21-9913-d95db686d28b","type":"BasicTicker"}},"id":"eea1f7c6-9b39-44e9-8193-8cfd7cc0dc55","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5aa1735-036c-4280-a73a-2fd705620337","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f97a12d-6149-4847-a7e2-94bc77171abb","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"d61e193a-9867-4d78-9dd7-58f740af3da4","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"9eeff177-7f20-4016-a43b-9653fdec8997","type":"Line"},{"attributes":{"plot":null,"text":"log axis example"},"id":"8c539845-b180-425e-88c0-5a7855051444","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cade406f-e550-4497-84d4-f1552659de96","type":"Line"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"3e0f3542-34d3-4be4-93e1-62b26c24f385","type":"GlyphRenderer"},{"id":"d46fc3f7-c7be-4c0e-8819-6c45b4ad51d4","type":"GlyphRenderer"}]},"id":"19323028-f911-4511-a2ec-578cd3def3b9","type":"LegendItem"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"449d43d3-38cc-49cf-8785-52d35f2781ba","type":"Line"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"5f14de23-94df-4303-9ea3-e01f74e94ba6","type":"Range1d"},{"attributes":{"source":{"id":"a1f2a6a5-98ab-49c3-ac27-6ba179342c94","type":"ColumnDataSource"}},"id":"b9b38e4f-f0d6-40f3-81cf-103e26cf646e","type":"CDSView"},{"attributes":{"below":[{"id":"eea1f7c6-9b39-44e9-8193-8cfd7cc0dc55","type":"LinearAxis"}],"left":[{"id":"7a1a10dc-74fd-4d25-adcc-032f5835b2f9","type":"LogAxis"}],"renderers":[{"id":"eea1f7c6-9b39-44e9-8193-8cfd7cc0dc55","type":"LinearAxis"},{"id":"d03dcb3e-c8ac-432a-88b7-e78e49be9732","type":"Grid"},{"id":"7a1a10dc-74fd-4d25-adcc-032f5835b2f9","type":"LogAxis"},{"id":"eece7ff2-98ef-4b46-86d9-b333b48bf504","type":"Grid"},{"id":"2f97a12d-6149-4847-a7e2-94bc77171abb","type":"BoxAnnotation"},{"id":"809e8fff-f9c1-4b96-a3e2-e367ddd5a658","type":"Legend"},{"id":"3e0f3542-34d3-4be4-93e1-62b26c24f385","type":"GlyphRenderer"},{"id":"d46fc3f7-c7be-4c0e-8819-6c45b4ad51d4","type":"GlyphRenderer"},{"id":"0d3e3bce-d85d-4db6-80bf-1ac83ae7d4fb","type":"GlyphRenderer"},{"id":"9c6e02ac-c614-43f0-91c7-612bb88fbb3f","type":"GlyphRenderer"},{"id":"df7759d9-6b43-4995-a2b0-4baac48d87d7","type":"GlyphRenderer"},{"id":"037d8f1a-bc3e-44fd-b909-4bf355c1fd4b","type":"GlyphRenderer"}],"title":{"id":"8c539845-b180-425e-88c0-5a7855051444","type":"Title"},"toolbar":{"id":"d4b314c9-1ea6-421f-8b2f-519c0dd492c8","type":"Toolbar"},"x_range":{"id":"ccff9dc4-e0b0-41c5-97d1-5715925bfea6","type":"DataRange1d"},"x_scale":{"id":"4ef65741-9738-4a29-a141-73d80af1047d","type":"LinearScale"},"y_range":{"id":"5f14de23-94df-4303-9ea3-e01f74e94ba6","type":"Range1d"},"y_scale":{"id":"4130e42a-fd78-4d36-8e15-863d3adefce6","type":"LogScale"}},"id":"33b7fd8a-4754-4ed4-8164-b21d75e163aa","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4ef65741-9738-4a29-a141-73d80af1047d","type":"LinearScale"},{"attributes":{"source":{"id":"d61e193a-9867-4d78-9dd7-58f740af3da4","type":"ColumnDataSource"}},"id":"17524231-886a-44dd-8b6d-50caeb2a480f","type":"CDSView"},{"attributes":{"data_source":{"id":"a1f2a6a5-98ab-49c3-ac27-6ba179342c94","type":"ColumnDataSource"},"glyph":{"id":"f52edf82-059b-4699-a411-606001c0f444","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cade406f-e550-4497-84d4-f1552659de96","type":"Line"},"selection_glyph":null,"view":{"id":"b9b38e4f-f0d6-40f3-81cf-103e26cf646e","type":"CDSView"}},"id":"9c6e02ac-c614-43f0-91c7-612bb88fbb3f","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"af3c3672-8821-4ed6-9988-93915cdca063","type":"Line"},{"attributes":{"source":{"id":"88267f71-34cd-4f99-a685-53e28c17f730","type":"ColumnDataSource"}},"id":"ba5ed15d-dcaa-4220-9a1d-d4446fd93678","type":"CDSView"},{"attributes":{},"id":"95ed0d14-d92b-46aa-bc01-f79138765b55","type":"PanTool"},{"attributes":{"num_minor_ticks":10},"id":"271f27b7-9bb2-498d-88df-9d15951a2479","type":"LogTicker"},{"attributes":{"data_source":{"id":"cd03c013-cebc-4987-a43b-ac413fd3d65c","type":"ColumnDataSource"},"glyph":{"id":"50d44cfc-67e0-46ba-a012-5c758423c885","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a8097c2-7ca2-44f7-b8f6-e4b56a924086","type":"Line"},"selection_glyph":null,"view":{"id":"647d511e-0f8c-4ae2-920e-eff66c534353","type":"CDSView"}},"id":"3e0f3542-34d3-4be4-93e1-62b26c24f385","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"ccff9dc4-e0b0-41c5-97d1-5715925bfea6","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"b2a0f409-de48-494f-a803-98e811c7008e","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"50d44cfc-67e0-46ba-a012-5c758423c885","type":"Line"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"9c6e02ac-c614-43f0-91c7-612bb88fbb3f","type":"GlyphRenderer"},{"id":"df7759d9-6b43-4995-a2b0-4baac48d87d7","type":"GlyphRenderer"}]},"id":"41bdd9f9-3275-48fb-92f6-08239850f450","type":"LegendItem"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4aaebb05-8c27-4cd1-b9c9-8346afb1338c","type":"Circle"}],"root_ids":["33b7fd8a-4754-4ed4-8164-b21d75e163aa"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"7208f3cf-eaf1-4596-ae02-5f423553654b","elementid":"07ee8968-5d67-4d3c-a348-1051b286992c","modelid":"33b7fd8a-4754-4ed4-8164-b21d75e163aa"}];
                
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
