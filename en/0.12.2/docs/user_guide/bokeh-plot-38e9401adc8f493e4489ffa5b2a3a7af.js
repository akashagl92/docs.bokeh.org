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
      };var element = document.getElementById("ea49b9fa-ded0-4fb4-a7a6-c0a9edd60f3a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea49b9fa-ded0-4fb4-a7a6-c0a9edd60f3a' but no matching script tag was found. ")
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
                  var docs_json = {"a46dc86a-b946-484a-87e6-976bd3d6f8e3":{"roots":{"references":[{"attributes":{"data_source":{"id":"9f207e2b-439b-4d62-8572-3ffaebdcce34","type":"ColumnDataSource"},"glyph":{"id":"6b50c740-9193-43cf-b566-c71a2d1bde9f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"521af6d1-4242-4270-b08f-eac7023f3822","type":"GlyphRenderer"},{"attributes":{},"id":"0d8d6f88-1b58-4ac0-8e5f-4827a7bf708d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6fff8445-58a7-4cc5-9689-c515e1930667","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(283.0, 326.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[42.0],"label":["(283.0, 326.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["304.5"],"y":[21.0]}},"id":"fbfdf0e1-4075-4271-90dc-d7d2f1c6cb31","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9fe6a8fa-cc23-4760-a561-ec78ac49c9d9","type":"Rect"},{"attributes":{"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"}},"id":"0fa7d6ea-dfa5-4108-8205-c0cad8df8846","type":"PanTool"},{"attributes":{"overlay":{"id":"6fff8445-58a7-4cc5-9689-c515e1930667","type":"BoxAnnotation"},"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"}},"id":"b89a7837-4c4d-45c4-99c0-2e2dc6752ce3","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"88c7bba2-99be-4d34-b59d-fc56ad204f4a","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"46280bb6-9e82-46f3-94ba-9c10ec9b6347","type":"Rect"},{"attributes":{"axis_label":"displ","formatter":{"id":"dd626530-d339-4cde-bf2e-6c2228cabe98","type":"BasicTickFormatter"},"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"},"ticker":{"id":"0d8d6f88-1b58-4ac0-8e5f-4827a7bf708d","type":"BasicTicker"}},"id":"7d199168-3dbd-4a47-8723-d7663ed7e3e2","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(197.0, 240.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[44.0],"label":["(197.0, 240.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["218.5"],"y":[22.0]}},"id":"2e0adaad-ee85-41cb-8f47-eadd116e2cf7","type":"ColumnDataSource"},{"attributes":{"location":"top_left","plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"}},"id":"c19ce4ab-1477-4360-9c44-2613366cae62","type":"Legend"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["[68.0, 111.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[115.0],"label":["[68.0, 111.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["89.5"],"y":[57.5]}},"id":"35bcaf62-330d-4dc2-8535-cd2414874ae1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"100641b2-a538-4de2-919f-c4c45cdf0dff","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0fa7d6ea-dfa5-4108-8205-c0cad8df8846","type":"PanTool"},{"id":"b528f6db-ac2b-49a9-90ae-befdc67c1d8f","type":"WheelZoomTool"},{"id":"b89a7837-4c4d-45c4-99c0-2e2dc6752ce3","type":"BoxZoomTool"},{"id":"2bee5128-e79a-4235-bd1c-7548435b40ed","type":"SaveTool"},{"id":"44e9d9c4-39e0-4bfb-8b3a-199b36e3d71e","type":"ResetTool"},{"id":"11e30c70-63c1-498f-8a25-e3251aec207c","type":"HelpTool"}]},"id":"4f051efc-c217-4789-884a-73d41e6db26a","type":"Toolbar"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9107be94-d21c-46f0-8c68-63d7a4f14039","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"368293c3-4864-4c95-bfbf-759c3174eb01","type":"Rect"},{"attributes":{"data_source":{"id":"88112505-399c-4c27-b092-697d273e99d4","type":"ColumnDataSource"},"glyph":{"id":"47d824f9-7b21-4a75-8a81-57a348e34817","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e9b673fa-07d4-4fd3-a839-39efc9fbcb6b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b50c740-9193-43cf-b566-c71a2d1bde9f","type":"Rect"},{"attributes":{"below":[{"id":"7d199168-3dbd-4a47-8723-d7663ed7e3e2","type":"LinearAxis"}],"height":400,"left":[{"id":"b1519146-8ff6-4d5d-bca0-4bf8fb5e1546","type":"LinearAxis"}],"renderers":[{"id":"6fff8445-58a7-4cc5-9689-c515e1930667","type":"BoxAnnotation"},{"id":"d3fbe4e1-58fd-4377-93a4-84a56b8e94db","type":"GlyphRenderer"},{"id":"bdea9e97-a014-471b-a2dd-9a79ae157de8","type":"GlyphRenderer"},{"id":"16e583a8-685c-43b5-98b7-0cef63731399","type":"GlyphRenderer"},{"id":"f81123c9-d314-44f0-b78d-dc4c832173a6","type":"GlyphRenderer"},{"id":"521af6d1-4242-4270-b08f-eac7023f3822","type":"GlyphRenderer"},{"id":"4b343418-99d0-4294-9013-7f9adb7551a5","type":"GlyphRenderer"},{"id":"e9b673fa-07d4-4fd3-a839-39efc9fbcb6b","type":"GlyphRenderer"},{"id":"ae1c718e-3f5c-42f2-a463-9882ca31fff4","type":"GlyphRenderer"},{"id":"3340c45f-ecd5-4724-ba06-607b1b601a85","type":"GlyphRenderer"},{"id":"c19ce4ab-1477-4360-9c44-2613366cae62","type":"Legend"},{"id":"7d199168-3dbd-4a47-8723-d7663ed7e3e2","type":"LinearAxis"},{"id":"b1519146-8ff6-4d5d-bca0-4bf8fb5e1546","type":"LinearAxis"},{"id":"c33aec4a-1208-443d-aa8a-f7576fd13102","type":"Grid"}],"title":{"id":"4e31b6a6-b561-48da-b52b-aefab8ad4645","type":"Title"},"tool_events":{"id":"87a8d0ea-b109-41d2-bd1c-b586289be462","type":"ToolEvents"},"toolbar":{"id":"4f051efc-c217-4789-884a-73d41e6db26a","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"5358687f-c2e1-45bf-a8e0-40330b9302fa","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4970a298-7ee1-4135-86f3-4c3b4e337fde","type":"Range1d"}},"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"fbfdf0e1-4075-4271-90dc-d7d2f1c6cb31","type":"ColumnDataSource"},"glyph":{"id":"9fe6a8fa-cc23-4760-a561-ec78ac49c9d9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4b343418-99d0-4294-9013-7f9adb7551a5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72ee5537-5ab1-42e9-89a6-ccacaec027bb","type":"ColumnDataSource"},"glyph":{"id":"9107be94-d21c-46f0-8c68-63d7a4f14039","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ae1c718e-3f5c-42f2-a463-9882ca31fff4","type":"GlyphRenderer"},{"attributes":{},"id":"dd626530-d339-4cde-bf2e-6c2228cabe98","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(240.0, 283.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[28.0],"label":["(240.0, 283.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["261.5"],"y":[14.0]}},"id":"9f207e2b-439b-4d62-8572-3ffaebdcce34","type":"ColumnDataSource"},{"attributes":{},"id":"ab970986-8c5f-4bac-9ac1-e5156e75deba","type":"BasicTicker"},{"attributes":{"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"}},"id":"11e30c70-63c1-498f-8a25-e3251aec207c","type":"HelpTool"},{"attributes":{"data_source":{"id":"6f375d0b-d01e-4f61-8563-2f7144e6e12f","type":"ColumnDataSource"},"glyph":{"id":"46280bb6-9e82-46f3-94ba-9c10ec9b6347","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3340c45f-ecd5-4724-ba06-607b1b601a85","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2e0adaad-ee85-41cb-8f47-eadd116e2cf7","type":"ColumnDataSource"},"glyph":{"id":"368293c3-4864-4c95-bfbf-759c3174eb01","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f81123c9-d314-44f0-b78d-dc4c832173a6","type":"GlyphRenderer"},{"attributes":{},"id":"87a8d0ea-b109-41d2-bd1c-b586289be462","type":"ToolEvents"},{"attributes":{"callback":null,"end":468.075,"start":54.925},"id":"5358687f-c2e1-45bf-a8e0-40330b9302fa","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"},"ticker":{"id":"ab970986-8c5f-4bac-9ac1-e5156e75deba","type":"BasicTicker"}},"id":"c33aec4a-1208-443d-aa8a-f7576fd13102","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"47d824f9-7b21-4a75-8a81-57a348e34817","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(326.0, 369.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[31.0],"label":["(326.0, 369.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["347.5"],"y":[15.5]}},"id":"88112505-399c-4c27-b092-697d273e99d4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"}},"id":"2bee5128-e79a-4235-bd1c-7548435b40ed","type":"SaveTool"},{"attributes":{"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"}},"id":"44e9d9c4-39e0-4bfb-8b3a-199b36e3d71e","type":"ResetTool"},{"attributes":{"data_source":{"id":"cd5dea85-b782-4189-a440-925c94d429e4","type":"ColumnDataSource"},"glyph":{"id":"88c7bba2-99be-4d34-b59d-fc56ad204f4a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"16e583a8-685c-43b5-98b7-0cef63731399","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(369.0, 412.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[16.0],"label":["(369.0, 412.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["390.5"],"y":[8.0]}},"id":"72ee5537-5ab1-42e9-89a6-ccacaec027bb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35bcaf62-330d-4dc2-8535-cd2414874ae1","type":"ColumnDataSource"},"glyph":{"id":"0d9a2259-65f6-4d97-a086-919fdd0f9e91","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d3fbe4e1-58fd-4377-93a4-84a56b8e94db","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count( Displ )","formatter":{"id":"c1fb5cca-2543-41fd-89a9-e44096833d18","type":"BasicTickFormatter"},"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"},"ticker":{"id":"ab970986-8c5f-4bac-9ac1-e5156e75deba","type":"BasicTicker"}},"id":"b1519146-8ff6-4d5d-bca0-4bf8fb5e1546","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(154.0, 197.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[18.0],"label":["(154.0, 197.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["175.5"],"y":[9.0]}},"id":"cd5dea85-b782-4189-a440-925c94d429e4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1f56c535-4412-430b-bee9-395c1741bd31","subtype":"Chart","type":"Plot"}},"id":"b528f6db-ac2b-49a9-90ae-befdc67c1d8f","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(111.0, 154.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[89.0],"label":["(111.0, 154.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["132.5"],"y":[44.5]}},"id":"ac8d36a4-479f-4827-a9c5-f078f077b4cb","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"DISPL Distribution"},"id":"4e31b6a6-b561-48da-b52b-aefab8ad4645","type":"Title"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(412.0, 455.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[9.0],"label":["(412.0, 455.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["433.5"],"y":[4.5]}},"id":"6f375d0b-d01e-4f61-8563-2f7144e6e12f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ac8d36a4-479f-4827-a9c5-f078f077b4cb","type":"ColumnDataSource"},"glyph":{"id":"100641b2-a538-4de2-919f-c4c45cdf0dff","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bdea9e97-a014-471b-a2dd-9a79ae157de8","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":126.50000000000001},"id":"4970a298-7ee1-4135-86f3-4c3b4e337fde","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d9a2259-65f6-4d97-a086-919fdd0f9e91","type":"Rect"},{"attributes":{},"id":"c1fb5cca-2543-41fd-89a9-e44096833d18","type":"BasicTickFormatter"}],"root_ids":["1f56c535-4412-430b-bee9-395c1741bd31"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"a46dc86a-b946-484a-87e6-976bd3d6f8e3","elementid":"ea49b9fa-ded0-4fb4-a7a6-c0a9edd60f3a","modelid":"1f56c535-4412-430b-bee9-395c1741bd31"}];
                  
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