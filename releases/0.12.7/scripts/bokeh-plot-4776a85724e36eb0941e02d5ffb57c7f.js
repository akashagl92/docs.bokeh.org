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
      };var element = document.getElementById("65215a6a-50e9-4d03-940e-cf5c870d05fd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '65215a6a-50e9-4d03-940e-cf5c870d05fd' but no matching script tag was found. ")
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
                var docs_json = {"40cb843a-f5c2-4261-912d-7da4da2852a6":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4261859d-4431-495f-a60c-ff250e3d124a","type":"Line"},{"attributes":{},"id":"2d2536cd-3535-4fb8-a55f-c3edecfdfc02","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1d4bd87d-4641-4078-81d1-b9623e222443","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"9a38475f-705d-4633-b77a-a4b63fc0b6a4","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1632d9f2-32da-4301-905b-55bbb007423f","subtype":"Figure","type":"Plot"},"ticker":{"id":"36f224e3-c11c-4761-9daf-2942daa9dcc3","type":"CategoricalTicker"}},"id":"6864e1dd-a4af-48ea-acca-6390b229a4c4","type":"Grid"},{"attributes":{"below":[{"id":"4dbd0148-7bb8-40f1-97f9-c4a484c69e02","type":"CategoricalAxis"}],"left":[{"id":"5847bd49-5d97-4496-af11-229acd10d453","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"4dbd0148-7bb8-40f1-97f9-c4a484c69e02","type":"CategoricalAxis"},{"id":"6864e1dd-a4af-48ea-acca-6390b229a4c4","type":"Grid"},{"id":"5847bd49-5d97-4496-af11-229acd10d453","type":"LinearAxis"},{"id":"b57a9f47-01f1-4bbc-a2c4-76ffd112c49b","type":"Grid"},{"id":"a3d21337-7870-4638-a660-f46380bc2884","type":"GlyphRenderer"},{"id":"044245ab-2b76-4e37-947a-609409814078","type":"GlyphRenderer"}],"title":{"id":"342040de-32b2-48d0-bdef-7101ad3fe517","type":"Title"},"toolbar":{"id":"488db975-521b-4560-8af9-899f38b8750f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4e05df59-5e07-4a93-a3ff-87fc4a978805","type":"FactorRange"},"x_scale":{"id":"2bb5dc14-4cda-4eba-a908-f48e05f617f6","type":"CategoricalScale"},"y_range":{"id":"a00a0272-b3be-4ba0-9a4a-c7712f59cd44","type":"DataRange1d"},"y_scale":{"id":"2d2536cd-3535-4fb8-a55f-c3edecfdfc02","type":"LinearScale"}},"id":"1632d9f2-32da-4301-905b-55bbb007423f","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"292d0cc1-2a1e-4fb1-b577-b837a58536b2","type":"ColumnDataSource"},"glyph":{"id":"5db0c050-517b-40ae-9657-ad29daf52caa","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4261859d-4431-495f-a60c-ff250e3d124a","type":"Line"},"selection_glyph":null,"view":{"id":"82c65d25-bf99-4f4c-9241-12c291723f00","type":"CDSView"}},"id":"044245ab-2b76-4e37-947a-609409814078","type":"GlyphRenderer"},{"attributes":{},"id":"36f224e3-c11c-4761-9daf-2942daa9dcc3","type":"CategoricalTicker"},{"attributes":{},"id":"2bb5dc14-4cda-4eba-a908-f48e05f617f6","type":"CategoricalScale"},{"attributes":{"dimension":1,"plot":{"id":"1632d9f2-32da-4301-905b-55bbb007423f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9fb738e-3a1f-4812-84a2-349220ef2864","type":"BasicTicker"}},"id":"b57a9f47-01f1-4bbc-a2c4-76ffd112c49b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"3a486841-7970-4217-8a96-147ab8682d8f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3a486841-7970-4217-8a96-147ab8682d8f","type":"ColumnDataSource"},"glyph":{"id":"1d4bd87d-4641-4078-81d1-b9623e222443","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9a38475f-705d-4633-b77a-a4b63fc0b6a4","type":"VBar"},"selection_glyph":null,"view":{"id":"cdb77366-e4bf-4dc2-9669-5d77c2ceb045","type":"CDSView"}},"id":"a3d21337-7870-4638-a660-f46380bc2884","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"488db975-521b-4560-8af9-899f38b8750f","type":"Toolbar"},{"attributes":{"callback":null,"start":0},"id":"a00a0272-b3be-4ba0-9a4a-c7712f59cd44","type":"DataRange1d"},{"attributes":{},"id":"d9fb738e-3a1f-4812-84a2-349220ef2864","type":"BasicTicker"},{"attributes":{"formatter":{"id":"10913cf2-8724-4d92-9151-082b3f17be48","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"1632d9f2-32da-4301-905b-55bbb007423f","subtype":"Figure","type":"Plot"},"ticker":{"id":"36f224e3-c11c-4761-9daf-2942daa9dcc3","type":"CategoricalTicker"}},"id":"4dbd0148-7bb8-40f1-97f9-c4a484c69e02","type":"CategoricalAxis"},{"attributes":{},"id":"10913cf2-8724-4d92-9151-082b3f17be48","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"2c39e02b-0905-4830-9338-15f5c80200b0","type":"BasicTickFormatter"},"plot":{"id":"1632d9f2-32da-4301-905b-55bbb007423f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9fb738e-3a1f-4812-84a2-349220ef2864","type":"BasicTicker"}},"id":"5847bd49-5d97-4496-af11-229acd10d453","type":"LinearAxis"},{"attributes":{"source":{"id":"3a486841-7970-4217-8a96-147ab8682d8f","type":"ColumnDataSource"}},"id":"cdb77366-e4bf-4dc2-9669-5d77c2ceb045","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"342040de-32b2-48d0-bdef-7101ad3fe517","type":"Title"},{"attributes":{},"id":"2c39e02b-0905-4830-9338-15f5c80200b0","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"red"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5db0c050-517b-40ae-9657-ad29daf52caa","type":"Line"},{"attributes":{"source":{"id":"292d0cc1-2a1e-4fb1-b577-b837a58536b2","type":"ColumnDataSource"}},"id":"82c65d25-bf99-4f4c-9241-12c291723f00","type":"CDSView"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"4e05df59-5e07-4a93-a3ff-87fc4a978805","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"292d0cc1-2a1e-4fb1-b577-b837a58536b2","type":"ColumnDataSource"}],"root_ids":["1632d9f2-32da-4301-905b-55bbb007423f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"40cb843a-f5c2-4261-912d-7da4da2852a6","elementid":"65215a6a-50e9-4d03-940e-cf5c870d05fd","modelid":"1632d9f2-32da-4301-905b-55bbb007423f"}];
                
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
