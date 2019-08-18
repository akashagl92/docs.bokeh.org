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
      };var element = document.getElementById("63001da2-b2bc-494e-acbd-cd3ec02521c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '63001da2-b2bc-494e-acbd-cd3ec02521c5' but no matching script tag was found. ")
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
                var docs_json = {"c2078479-5faa-4ce5-93f5-333b89161681":{"roots":{"references":[{"attributes":{},"id":"afc09e2e-0f4a-4fec-90ec-90008f3fb0bc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(240.000000, 283.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[28.0],"label":["(240.000000, 283.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["261.5"],"y":[14.0]}},"id":"8eaeb825-7743-4881-b478-ad584942c39b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8ce98f67-483f-4a51-8b8a-f7c2d2791d9c","type":"ColumnDataSource"},"glyph":{"id":"abc9a3eb-983c-4218-9cb6-45ef44b85233","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2744f3c5-917d-4901-9350-780c95354138","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8740fe1a-f68d-469a-82a7-915eb9b92b6f","type":"Rect"},{"attributes":{"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"}},"id":"a914bc85-de90-42e4-85c4-c7aaedc0e6d5","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34e0b80a-70be-473c-991c-10bb8f9e7729","type":"Rect"},{"attributes":{"data_source":{"id":"3791b85d-1eda-4aa9-b814-7ea078e98612","type":"ColumnDataSource"},"glyph":{"id":"029c2493-84e2-4776-9f92-a53b791967ed","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a77eef09-8aff-481b-9e3e-9b5d20a67dda","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count( Displ )","formatter":{"id":"211ca248-7ba7-4f7f-9d35-018c379e5aa3","type":"BasicTickFormatter"},"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"},"ticker":{"id":"07fe7482-5e6f-4f26-bfe4-d6b840a8d488","type":"BasicTicker"}},"id":"688a198b-f271-4e22-bf88-cf2e00c2973e","type":"LinearAxis"},{"attributes":{"axis_label":"displ","formatter":{"id":"afc09e2e-0f4a-4fec-90ec-90008f3fb0bc","type":"BasicTickFormatter"},"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"},"ticker":{"id":"49597e24-a879-4b70-8f26-77c264f99109","type":"BasicTicker"}},"id":"7d84f96c-67f0-491e-8285-5cd3b0f53aef","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(326.000000, 369.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[31.0],"label":["(326.000000, 369.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["347.5"],"y":[15.5]}},"id":"b985ffd9-86c8-45e0-9945-ef7998b4b23e","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":468.075,"start":54.925},"id":"c29e27ed-43b5-4b95-a046-95bd77e24452","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a24b7ab-5b22-4f92-8790-c914e7b564d3","type":"Rect"},{"attributes":{"location":"top_left","plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"}},"id":"783aabb6-65f2-4882-a213-78e68d7d69ce","type":"Legend"},{"attributes":{"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"}},"id":"3821eab4-ac44-49ca-87da-c27c33079111","type":"HelpTool"},{"attributes":{"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"}},"id":"480fc169-229f-4227-9b39-6650f39e8a49","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(412.000000, 455.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[9.0],"label":["(412.000000, 455.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["433.5"],"y":[4.5]}},"id":"80663ffa-68a0-4ed1-a545-255a576b096c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"}},"id":"04a96b35-79dd-4468-a3f6-05b93e4887ce","type":"SaveTool"},{"attributes":{"data_source":{"id":"80663ffa-68a0-4ed1-a545-255a576b096c","type":"ColumnDataSource"},"glyph":{"id":"8740fe1a-f68d-469a-82a7-915eb9b92b6f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"90e06885-f17a-4e86-bcdc-a085d99633e1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"30f51d2d-155d-4f13-afd5-af9debe46d25","type":"ColumnDataSource"},"glyph":{"id":"6a24b7ab-5b22-4f92-8790-c914e7b564d3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"538b3312-8513-476a-82b6-df9d753d79ee","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8eaeb825-7743-4881-b478-ad584942c39b","type":"ColumnDataSource"},"glyph":{"id":"6bda9bdc-61ff-426c-9596-4e5bd08033f0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"346171ac-5a7d-4176-b555-a2f8d078de31","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":126.50000000000001},"id":"ec31d54e-b565-4e67-806e-de923efab453","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"},"ticker":{"id":"07fe7482-5e6f-4f26-bfe4-d6b840a8d488","type":"BasicTicker"}},"id":"9fe15ee5-87a4-4c63-ae92-16089d2d9654","type":"Grid"},{"attributes":{"data_source":{"id":"9086f5f8-4ab1-449f-a6f1-fe4b5d31dca4","type":"ColumnDataSource"},"glyph":{"id":"adb5c303-98b5-471f-b6c3-b3e9c79ad367","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f7ffc6ed-6eff-4010-81c5-5b5b04854101","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(154.000000, 197.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[18.0],"label":["(154.000000, 197.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["175.5"],"y":[9.0]}},"id":"21698204-5cb3-4bd4-b234-6a820b001b0f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["[68.000000, 111.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[115.0],"label":["[68.000000, 111.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["89.5"],"y":[57.5]}},"id":"9086f5f8-4ab1-449f-a6f1-fe4b5d31dca4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(369.000000, 412.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[16.0],"label":["(369.000000, 412.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["390.5"],"y":[8.0]}},"id":"297d42ee-8a56-472e-b3ea-3cbc670ca0cf","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"07994ee4-023b-40ac-bf6a-3e3d7157fa5d","type":"BoxAnnotation"},"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"}},"id":"25583659-29eb-4a6f-9a01-ecd678c34ab5","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ab9a3ff6-8c34-42df-98ca-4f188bbc4d5d","type":"PanTool"},{"id":"480fc169-229f-4227-9b39-6650f39e8a49","type":"WheelZoomTool"},{"id":"25583659-29eb-4a6f-9a01-ecd678c34ab5","type":"BoxZoomTool"},{"id":"04a96b35-79dd-4468-a3f6-05b93e4887ce","type":"SaveTool"},{"id":"a914bc85-de90-42e4-85c4-c7aaedc0e6d5","type":"ResetTool"},{"id":"3821eab4-ac44-49ca-87da-c27c33079111","type":"HelpTool"}]},"id":"0ebdd3c5-4490-4d96-b13b-72d2cb4a9083","type":"Toolbar"},{"attributes":{"data_source":{"id":"b985ffd9-86c8-45e0-9945-ef7998b4b23e","type":"ColumnDataSource"},"glyph":{"id":"957f9196-2f87-489d-9e6c-130285d82487","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6075ab0c-6d97-48c1-a8c8-6ba82d648254","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"}},"id":"ab9a3ff6-8c34-42df-98ca-4f188bbc4d5d","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"029c2493-84e2-4776-9f92-a53b791967ed","type":"Rect"},{"attributes":{},"id":"211ca248-7ba7-4f7f-9d35-018c379e5aa3","type":"BasicTickFormatter"},{"attributes":{},"id":"49597e24-a879-4b70-8f26-77c264f99109","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"adb5c303-98b5-471f-b6c3-b3e9c79ad367","type":"Rect"},{"attributes":{"data_source":{"id":"21698204-5cb3-4bd4-b234-6a820b001b0f","type":"ColumnDataSource"},"glyph":{"id":"6f49af1c-4f88-43d9-af7f-3bef4502d188","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"594aebf5-35fc-4f2a-84a2-73d3967899ca","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(283.000000, 326.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[42.0],"label":["(283.000000, 326.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["304.5"],"y":[21.0]}},"id":"8ce98f67-483f-4a51-8b8a-f7c2d2791d9c","type":"ColumnDataSource"},{"attributes":{},"id":"9490fd10-440e-4d0c-9b22-a63383c8bf8c","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(197.000000, 240.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[44.0],"label":["(197.000000, 240.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["218.5"],"y":[22.0]}},"id":"3791b85d-1eda-4aa9-b814-7ea078e98612","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"DISPL Distribution"},"id":"a8ebbd18-199f-410b-9cb6-8455ad8f3d7b","type":"Title"},{"attributes":{"below":[{"id":"7d84f96c-67f0-491e-8285-5cd3b0f53aef","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"688a198b-f271-4e22-bf88-cf2e00c2973e","type":"LinearAxis"}],"renderers":[{"id":"07994ee4-023b-40ac-bf6a-3e3d7157fa5d","type":"BoxAnnotation"},{"id":"f7ffc6ed-6eff-4010-81c5-5b5b04854101","type":"GlyphRenderer"},{"id":"538b3312-8513-476a-82b6-df9d753d79ee","type":"GlyphRenderer"},{"id":"594aebf5-35fc-4f2a-84a2-73d3967899ca","type":"GlyphRenderer"},{"id":"a77eef09-8aff-481b-9e3e-9b5d20a67dda","type":"GlyphRenderer"},{"id":"346171ac-5a7d-4176-b555-a2f8d078de31","type":"GlyphRenderer"},{"id":"2744f3c5-917d-4901-9350-780c95354138","type":"GlyphRenderer"},{"id":"6075ab0c-6d97-48c1-a8c8-6ba82d648254","type":"GlyphRenderer"},{"id":"cf3df3f2-5f7c-4614-bfc3-ec1870874af3","type":"GlyphRenderer"},{"id":"90e06885-f17a-4e86-bcdc-a085d99633e1","type":"GlyphRenderer"},{"id":"783aabb6-65f2-4882-a213-78e68d7d69ce","type":"Legend"},{"id":"7d84f96c-67f0-491e-8285-5cd3b0f53aef","type":"LinearAxis"},{"id":"688a198b-f271-4e22-bf88-cf2e00c2973e","type":"LinearAxis"},{"id":"9fe15ee5-87a4-4c63-ae92-16089d2d9654","type":"Grid"}],"title":{"id":"a8ebbd18-199f-410b-9cb6-8455ad8f3d7b","type":"Title"},"tool_events":{"id":"9490fd10-440e-4d0c-9b22-a63383c8bf8c","type":"ToolEvents"},"toolbar":{"id":"0ebdd3c5-4490-4d96-b13b-72d2cb4a9083","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"c29e27ed-43b5-4b95-a046-95bd77e24452","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ec31d54e-b565-4e67-806e-de923efab453","type":"Range1d"}},"id":"95009db9-1f93-4454-8505-25d2f229f24a","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"297d42ee-8a56-472e-b3ea-3cbc670ca0cf","type":"ColumnDataSource"},"glyph":{"id":"34e0b80a-70be-473c-991c-10bb8f9e7729","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cf3df3f2-5f7c-4614-bfc3-ec1870874af3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"957f9196-2f87-489d-9e6c-130285d82487","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f49af1c-4f88-43d9-af7f-3bef4502d188","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":["(111.000000, 154.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[89.0],"label":["(111.000000, 154.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["132.5"],"y":[44.5]}},"id":"30f51d2d-155d-4f13-afd5-af9debe46d25","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"07994ee4-023b-40ac-bf6a-3e3d7157fa5d","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bda9bdc-61ff-426c-9596-4e5bd08033f0","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"abc9a3eb-983c-4218-9cb6-45ef44b85233","type":"Rect"},{"attributes":{},"id":"07fe7482-5e6f-4f26-bfe4-d6b840a8d488","type":"BasicTicker"}],"root_ids":["95009db9-1f93-4454-8505-25d2f229f24a"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"c2078479-5faa-4ce5-93f5-333b89161681","elementid":"63001da2-b2bc-494e-acbd-cd3ec02521c5","modelid":"95009db9-1f93-4454-8505-25d2f229f24a"}];
                
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
