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
      };var element = document.getElementById("4d4e9b03-55ca-4a5e-9425-b8dd11fcb73a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d4e9b03-55ca-4a5e-9425-b8dd11fcb73a' but no matching script tag was found. ")
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
                var docs_json = {"d059b1f9-9c1d-49f8-a097-cd7b479cc948":{"roots":{"references":[{"attributes":{"label":{"value":"4"},"renderers":[{"id":"ee2434ae-eed4-4717-817a-71e07d814720","type":"GlyphRenderer"}]},"id":"837679df-afa8-4634-bba8-427e9e77ee63","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5}],"color":["#f22c40"],"cyl":[5],"fill_alpha":[0.8],"height":[82.1],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["5"],"y":[41.05]}},"id":"024967ee-64cd-44e2-8989-9311305ca24f","type":"ColumnDataSource"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"48629ed0-47aa-4146-8e12-5937426df050","type":"GlyphRenderer"}]},"id":"c915bcf5-4a54-48a8-b8c8-92e5c4352557","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6d2824d9-44f8-4562-9b70-0fba7c20aa3d","type":"PanTool"},{"id":"44e6aae2-e290-48eb-a83d-779db11baf0e","type":"WheelZoomTool"},{"id":"7e36fb9b-dad5-409a-b472-11637d0d5241","type":"BoxZoomTool"},{"id":"857c3626-4768-49ec-a820-16dd196c0acf","type":"SaveTool"},{"id":"64030bc4-5219-497a-9468-63818774f2e9","type":"ResetTool"},{"id":"191f8e82-acf6-4479-b29d-0497fdebe41c","type":"HelpTool"}]},"id":"d8b4950c-03df-4bb2-b436-ee5b8dc4773f","type":"Toolbar"},{"attributes":{"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"}},"id":"64030bc4-5219-497a-9468-63818774f2e9","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[82.2],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["3"],"y":[41.1]}},"id":"2c69c7b6-189b-4a03-8976-cdfd222ed1c8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ecbcd9f6-299c-429c-9f95-494618235389","type":"Rect"},{"attributes":{"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"}},"id":"857c3626-4768-49ec-a820-16dd196c0acf","type":"SaveTool"},{"attributes":{"items":[{"id":"55aad1f8-2f11-4af0-8136-7e1c3db5083a","type":"LegendItem"},{"id":"837679df-afa8-4634-bba8-427e9e77ee63","type":"LegendItem"},{"id":"c915bcf5-4a54-48a8-b8c8-92e5c4352557","type":"LegendItem"},{"id":"296478b7-5d0f-4080-bf90-04eafe28babd","type":"LegendItem"},{"id":"e4233c4b-2f8a-475d-b2cc-2090a7ef0af3","type":"LegendItem"}],"location":"top_left","plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"}},"id":"7ddf62dd-3e9f-46f8-98ae-04b8acb6f09f","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4a46083c-ee12-4bc9-bbe4-c187b440961b","type":"BoxAnnotation"},{"attributes":{},"id":"1eebdb90-cf00-4627-9607-6436f082dda8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8}],"color":["#f22c40"],"cyl":[8],"fill_alpha":[0.8],"height":[1541.2],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["8"],"y":[770.6]}},"id":"11d930e2-7e11-4ce0-a9c1-ec898d37db73","type":"ColumnDataSource"},{"attributes":{},"id":"acf5da80-fe73-4d70-b5be-cd26a072b78f","type":"CategoricalTicker"},{"attributes":{},"id":"2b463c9e-ba6e-400d-91cf-c3f830533762","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"7a1ff324-a076-4acb-990c-a975984e73ae","type":"FactorRange"},{"attributes":{"plot":null,"text":"Total MPG by CYL"},"id":"4b582a03-7046-4409-b583-49fa7b9b578b","type":"Title"},{"attributes":{"overlay":{"id":"4a46083c-ee12-4bc9-bbe4-c187b440961b","type":"BoxAnnotation"},"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"}},"id":"7e36fb9b-dad5-409a-b472-11637d0d5241","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"}},"id":"6d2824d9-44f8-4562-9b70-0fba7c20aa3d","type":"PanTool"},{"attributes":{},"id":"dd229a9f-75e3-4669-a0d2-2b8f87d155db","type":"ToolEvents"},{"attributes":{"callback":null,"end":6118.875},"id":"7b549930-8aa6-4f04-9a87-4883d53610ce","type":"Range1d"},{"attributes":{"data_source":{"id":"11d930e2-7e11-4ce0-a9c1-ec898d37db73","type":"ColumnDataSource"},"glyph":{"id":"93573552-a124-457f-a924-22281a850301","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2dbd39a7-e795-4cc9-8f5e-b6dcf0f71c7a","type":"GlyphRenderer"},{"attributes":{},"id":"5dc7a6a0-8104-4418-b872-3aedd770ac39","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"93573552-a124-457f-a924-22281a850301","type":"Rect"},{"attributes":{"data_source":{"id":"d13242e8-5ebb-465b-88b8-36529864c2f7","type":"ColumnDataSource"},"glyph":{"id":"095279fc-756e-454b-ac39-6b68e6724cce","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48629ed0-47aa-4146-8e12-5937426df050","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"}},"id":"191f8e82-acf6-4479-b29d-0497fdebe41c","type":"HelpTool"},{"attributes":{"below":[{"id":"46ce0451-f8db-4c5c-90d6-12865e505e12","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"d5c68515-dff4-4476-b2fd-d772ac93a70f","type":"LinearAxis"}],"renderers":[{"id":"4a46083c-ee12-4bc9-bbe4-c187b440961b","type":"BoxAnnotation"},{"id":"2dbd39a7-e795-4cc9-8f5e-b6dcf0f71c7a","type":"GlyphRenderer"},{"id":"ee2434ae-eed4-4717-817a-71e07d814720","type":"GlyphRenderer"},{"id":"48629ed0-47aa-4146-8e12-5937426df050","type":"GlyphRenderer"},{"id":"3fa2f4bc-32ac-4c34-b04a-5108bb81fcb1","type":"GlyphRenderer"},{"id":"64cfcfd3-6605-42ee-a124-66006d94f0c5","type":"GlyphRenderer"},{"id":"7ddf62dd-3e9f-46f8-98ae-04b8acb6f09f","type":"Legend"},{"id":"46ce0451-f8db-4c5c-90d6-12865e505e12","type":"CategoricalAxis"},{"id":"d5c68515-dff4-4476-b2fd-d772ac93a70f","type":"LinearAxis"},{"id":"3911bc47-95e0-4813-9884-5538933e749b","type":"Grid"}],"title":{"id":"4b582a03-7046-4409-b583-49fa7b9b578b","type":"Title"},"tool_events":{"id":"dd229a9f-75e3-4669-a0d2-2b8f87d155db","type":"ToolEvents"},"toolbar":{"id":"d8b4950c-03df-4bb2-b436-ee5b8dc4773f","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"7a1ff324-a076-4acb-990c-a975984e73ae","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"7b549930-8aa6-4f04-9a87-4883d53610ce","type":"Range1d"}},"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"095279fc-756e-454b-ac39-6b68e6724cce","type":"Rect"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"64cfcfd3-6605-42ee-a124-66006d94f0c5","type":"GlyphRenderer"}]},"id":"e4233c4b-2f8a-475d-b2cc-2090a7ef0af3","type":"LegendItem"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"3fa2f4bc-32ac-4c34-b04a-5108bb81fcb1","type":"GlyphRenderer"}]},"id":"296478b7-5d0f-4080-bf90-04eafe28babd","type":"LegendItem"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"2dbd39a7-e795-4cc9-8f5e-b6dcf0f71c7a","type":"GlyphRenderer"}]},"id":"55aad1f8-2f11-4af0-8136-7e1c3db5083a","type":"LegendItem"},{"attributes":{"data_source":{"id":"024967ee-64cd-44e2-8989-9311305ca24f","type":"ColumnDataSource"},"glyph":{"id":"8c6cb9a3-76ab-499f-9206-a4cb7cfffcab","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64cfcfd3-6605-42ee-a124-66006d94f0c5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"139d8b01-33bd-43fb-86ba-7059a303035f","type":"Rect"},{"attributes":{"data_source":{"id":"2c69c7b6-189b-4a03-8976-cdfd222ed1c8","type":"ColumnDataSource"},"glyph":{"id":"ecbcd9f6-299c-429c-9f95-494618235389","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3fa2f4bc-32ac-4c34-b04a-5108bb81fcb1","type":"GlyphRenderer"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"5dc7a6a0-8104-4418-b872-3aedd770ac39","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"},"ticker":{"id":"acf5da80-fe73-4d70-b5be-cd26a072b78f","type":"CategoricalTicker"}},"id":"46ce0451-f8db-4c5c-90d6-12865e505e12","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6}],"color":["#f22c40"],"cyl":[6],"fill_alpha":[0.8],"height":[1657.8],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["6"],"y":[828.9]}},"id":"d13242e8-5ebb-465b-88b8-36529864c2f7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c6cb9a3-76ab-499f-9206-a4cb7cfffcab","type":"Rect"},{"attributes":{"data_source":{"id":"18854870-45ef-44d1-bafc-2f90acef0998","type":"ColumnDataSource"},"glyph":{"id":"139d8b01-33bd-43fb-86ba-7059a303035f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ee2434ae-eed4-4717-817a-71e07d814720","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4}],"color":["#f22c40"],"cyl":[4],"fill_alpha":[0.8],"height":[5827.5],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["4"],"y":[2913.75]}},"id":"18854870-45ef-44d1-bafc-2f90acef0998","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"},"ticker":{"id":"1eebdb90-cf00-4627-9607-6436f082dda8","type":"BasicTicker"}},"id":"3911bc47-95e0-4813-9884-5538933e749b","type":"Grid"},{"attributes":{"axis_label":"Sum( Mpg )","formatter":{"id":"2b463c9e-ba6e-400d-91cf-c3f830533762","type":"BasicTickFormatter"},"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"},"ticker":{"id":"1eebdb90-cf00-4627-9607-6436f082dda8","type":"BasicTicker"}},"id":"d5c68515-dff4-4476-b2fd-d772ac93a70f","type":"LinearAxis"},{"attributes":{"plot":{"id":"c4a15bd2-480e-4405-b249-f1a3f079bc76","subtype":"Chart","type":"Plot"}},"id":"44e6aae2-e290-48eb-a83d-779db11baf0e","type":"WheelZoomTool"}],"root_ids":["c4a15bd2-480e-4405-b249-f1a3f079bc76"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d059b1f9-9c1d-49f8-a097-cd7b479cc948","elementid":"4d4e9b03-55ca-4a5e-9425-b8dd11fcb73a","modelid":"c4a15bd2-480e-4405-b249-f1a3f079bc76"}];
                
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
