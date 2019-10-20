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
      };var element = document.getElementById("2b217d36-47d0-415e-a581-5217031a4b42");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b217d36-47d0-415e-a581-5217031a4b42' but no matching script tag was found. ")
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
                var docs_json = {"4a8864b2-ea4e-4654-8a89-e2a4b2502682":{"roots":{"references":[{"attributes":{},"id":"095abed1-fce5-4d7e-8b5f-ef17505f7e6c","type":"BasicTicker"},{"attributes":{"axis_label":"sections","formatter":{"id":"603c659c-e0af-4952-ab40-362cdbe0486b","type":"BasicTickFormatter"},"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"},"ticker":{"id":"095abed1-fce5-4d7e-8b5f-ef17505f7e6c","type":"BasicTicker"}},"id":"798731c7-f25b-4f21-a9b2-fb72abc56d31","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"bcdf04fa-1295-4d45-92e6-a1464906516f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"b66cc584-9b70-469d-9829-36b16d783ca6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"},"ticker":{"id":"095abed1-fce5-4d7e-8b5f-ef17505f7e6c","type":"BasicTicker"}},"id":"e657a3fb-e149-4ca1-a059-babbf29b4501","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"563b61b4-052c-46fa-9303-f1a6b30c4113","type":"Line"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"dd9b883d-48ae-4d87-b5fc-72c31501a177","type":"GlyphRenderer"},{"id":"9e2d35be-d5fc-4cda-950a-698033578088","type":"GlyphRenderer"}]},"id":"b5f4c5ea-1ff7-449b-bd33-8a65b44568aa","type":"LegendItem"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"04e2ea4a-2de5-4189-8d4c-02dce8972be6","type":"Line"},{"attributes":{"plot":null,"text":"log axis example"},"id":"f922a987-bdc7-4d7b-b8d8-d61509715b99","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"317b1128-b880-4974-9e29-6f64db33920c","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d63d997-1138-4bf1-a89f-ff8709c6f65b","type":"LogTicker"}},"id":"a3847b4e-c333-410e-b726-9c09caba71b3","type":"Grid"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"46647698-50ea-4f99-805d-0603d756044a","type":"GlyphRenderer"}]},"id":"a837fbd1-ddf4-4f94-b0ce-4d25e7d5e118","type":"LegendItem"},{"attributes":{"axis_label":"particles","formatter":{"id":"181120c1-8072-46e8-94b3-ef6aa89d85e5","type":"LogTickFormatter"},"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d63d997-1138-4bf1-a89f-ff8709c6f65b","type":"LogTicker"}},"id":"a378b4ae-c346-4930-a23a-15f7b7953185","type":"LogAxis"},{"attributes":{"num_minor_ticks":10},"id":"8d63d997-1138-4bf1-a89f-ff8709c6f65b","type":"LogTicker"},{"attributes":{"data_source":{"id":"e1efe77c-5047-4813-938b-ccbed7df5f6c","type":"ColumnDataSource"},"glyph":{"id":"b3b4f541-a890-4f78-95da-ef87e658980a","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"fbd1df61-9bc6-4240-be14-476b6cbc8f67","type":"Line"},"selection_glyph":null},"id":"46647698-50ea-4f99-805d-0603d756044a","type":"GlyphRenderer"},{"attributes":{},"id":"1b2c28f7-afee-4262-8216-0abd9733d18b","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d7436c0-667d-4fb7-bfd9-ac31eef69d11","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"89b81389-8473-4d78-9435-50ec37d41a2f","type":"PanTool"},{"id":"70d9ee3d-93f3-4e39-b529-63e2f2ffd237","type":"BoxZoomTool"},{"id":"c099b4bd-79a4-4b68-884e-e16e1d8226ee","type":"ResetTool"},{"id":"82a36b46-5e87-43a3-8074-ff1c8cea82b5","type":"SaveTool"}]},"id":"ed37857d-be1e-4700-a0fc-cda9fbd7d400","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"e1efe77c-5047-4813-938b-ccbed7df5f6c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"2d949052-d95a-433c-92fb-cb04d50802e5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2d949052-d95a-433c-92fb-cb04d50802e5","type":"ColumnDataSource"},"glyph":{"id":"0d7436c0-667d-4fb7-bfd9-ac31eef69d11","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"9a52bdad-2bf0-489b-b6df-1db52ba3b69d","type":"Line"},"selection_glyph":null},"id":"a207c577-5407-4d37-be8d-e81e154fb979","type":"GlyphRenderer"},{"attributes":{},"id":"603c659c-e0af-4952-ab40-362cdbe0486b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"}},"id":"82a36b46-5e87-43a3-8074-ff1c8cea82b5","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a52bdad-2bf0-489b-b6df-1db52ba3b69d","type":"Line"},{"attributes":{"ticker":null},"id":"181120c1-8072-46e8-94b3-ef6aa89d85e5","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"1a1ba8ea-f0b0-4bec-91b4-ec7652c46ac7","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea7b1d74-31fa-467b-ac53-653e8cc63686","type":"Line"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"a207c577-5407-4d37-be8d-e81e154fb979","type":"GlyphRenderer"},{"id":"10455cc7-0ca7-4318-a359-e3a4f8d1c6f6","type":"GlyphRenderer"}]},"id":"1554b16c-5f86-4bc9-a5df-a2b32f840635","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"8ec0746c-3dee-422c-a6ac-f000fe3c6e5c","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"1554b16c-5f86-4bc9-a5df-a2b32f840635","type":"LegendItem"},{"id":"78a8046b-4847-425d-bad1-e025bae5e08a","type":"LegendItem"},{"id":"b5f4c5ea-1ff7-449b-bd33-8a65b44568aa","type":"LegendItem"},{"id":"a837fbd1-ddf4-4f94-b0ce-4d25e7d5e118","type":"LegendItem"}],"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"}},"id":"32d1af5a-e95a-4f28-94c7-5bf2aa109913","type":"Legend"},{"attributes":{"below":[{"id":"798731c7-f25b-4f21-a9b2-fb72abc56d31","type":"LinearAxis"}],"left":[{"id":"a378b4ae-c346-4930-a23a-15f7b7953185","type":"LogAxis"}],"renderers":[{"id":"798731c7-f25b-4f21-a9b2-fb72abc56d31","type":"LinearAxis"},{"id":"e657a3fb-e149-4ca1-a059-babbf29b4501","type":"Grid"},{"id":"a378b4ae-c346-4930-a23a-15f7b7953185","type":"LogAxis"},{"id":"a3847b4e-c333-410e-b726-9c09caba71b3","type":"Grid"},{"id":"db7ee8c2-cd5c-4eba-9120-6879d389405a","type":"BoxAnnotation"},{"id":"32d1af5a-e95a-4f28-94c7-5bf2aa109913","type":"Legend"},{"id":"a207c577-5407-4d37-be8d-e81e154fb979","type":"GlyphRenderer"},{"id":"10455cc7-0ca7-4318-a359-e3a4f8d1c6f6","type":"GlyphRenderer"},{"id":"67907e61-f477-424d-b8ab-f5bc570d253f","type":"GlyphRenderer"},{"id":"dd9b883d-48ae-4d87-b5fc-72c31501a177","type":"GlyphRenderer"},{"id":"9e2d35be-d5fc-4cda-950a-698033578088","type":"GlyphRenderer"},{"id":"46647698-50ea-4f99-805d-0603d756044a","type":"GlyphRenderer"}],"title":{"id":"f922a987-bdc7-4d7b-b8d8-d61509715b99","type":"Title"},"tool_events":{"id":"1b2c28f7-afee-4262-8216-0abd9733d18b","type":"ToolEvents"},"toolbar":{"id":"ed37857d-be1e-4700-a0fc-cda9fbd7d400","type":"Toolbar"},"x_range":{"id":"d151649f-8d1c-4fba-9ceb-cf9cba15ccac","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"f99cc855-7f08-4635-a6fb-281316e3ed44","type":"Range1d"}},"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"d151649f-8d1c-4fba-9ceb-cf9cba15ccac","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"6bf21d7c-48b8-4221-8f7c-c8143605da2e","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"f99cc855-7f08-4635-a6fb-281316e3ed44","type":"Range1d"},{"attributes":{"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"}},"id":"c099b4bd-79a4-4b68-884e-e16e1d8226ee","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"fbd1df61-9bc6-4240-be14-476b6cbc8f67","type":"Line"},{"attributes":{"overlay":{"id":"db7ee8c2-cd5c-4eba-9120-6879d389405a","type":"BoxAnnotation"},"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"}},"id":"70d9ee3d-93f3-4e39-b529-63e2f2ffd237","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"237af1f4-c4a0-4240-be69-2b47a5ffdce5","type":"Line"},{"attributes":{"data_source":{"id":"1a1ba8ea-f0b0-4bec-91b4-ec7652c46ac7","type":"ColumnDataSource"},"glyph":{"id":"2919950a-d13f-46b1-85d5-d0ee6c3ee19c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"bcdf04fa-1295-4d45-92e6-a1464906516f","type":"Circle"},"selection_glyph":null},"id":"10455cc7-0ca7-4318-a359-e3a4f8d1c6f6","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"67907e61-f477-424d-b8ab-f5bc570d253f","type":"GlyphRenderer"}]},"id":"78a8046b-4847-425d-bad1-e025bae5e08a","type":"LegendItem"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"b3b4f541-a890-4f78-95da-ef87e658980a","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"db7ee8c2-cd5c-4eba-9120-6879d389405a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274","subtype":"Figure","type":"Plot"}},"id":"89b81389-8473-4d78-9435-50ec37d41a2f","type":"PanTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"2919950a-d13f-46b1-85d5-d0ee6c3ee19c","type":"Circle"},{"attributes":{"data_source":{"id":"8ec0746c-3dee-422c-a6ac-f000fe3c6e5c","type":"ColumnDataSource"},"glyph":{"id":"04e2ea4a-2de5-4189-8d4c-02dce8972be6","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"563b61b4-052c-46fa-9303-f1a6b30c4113","type":"Line"},"selection_glyph":null},"id":"67907e61-f477-424d-b8ab-f5bc570d253f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6bf21d7c-48b8-4221-8f7c-c8143605da2e","type":"ColumnDataSource"},"glyph":{"id":"a7913945-f376-4684-af3b-a2be3ab7b5a6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"317b1128-b880-4974-9e29-6f64db33920c","type":"Circle"},"selection_glyph":null},"id":"9e2d35be-d5fc-4cda-950a-698033578088","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b66cc584-9b70-469d-9829-36b16d783ca6","type":"ColumnDataSource"},"glyph":{"id":"ea7b1d74-31fa-467b-ac53-653e8cc63686","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"237af1f4-c4a0-4240-be69-2b47a5ffdce5","type":"Line"},"selection_glyph":null},"id":"dd9b883d-48ae-4d87-b5fc-72c31501a177","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7913945-f376-4684-af3b-a2be3ab7b5a6","type":"Circle"}],"root_ids":["b2dbeeda-fa8c-4d0b-b4bc-467c62101274"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"4a8864b2-ea4e-4654-8a89-e2a4b2502682","elementid":"2b217d36-47d0-415e-a581-5217031a4b42","modelid":"b2dbeeda-fa8c-4d0b-b4bc-467c62101274"}];
                
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
