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
      };var element = document.getElementById("aeb46ac6-bcfa-4782-a6d6-a8d2ac35da0d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aeb46ac6-bcfa-4782-a6d6-a8d2ac35da0d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d32b48fa-7d8a-4685-aed6-a8ce75d873cd":{"roots":{"references":[{"attributes":{"overlay":{"id":"e0ad5343-b32c-421b-9919-07d41245ec16","type":"BoxAnnotation"},"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"}},"id":"f7377217-1f7c-4b43-afc7-2934833855f9","type":"BoxZoomTool"},{"attributes":{},"id":"ad8c21ad-9318-4031-8309-bdb8277b0c11","type":"CategoricalTicker"},{"attributes":{},"id":"84f98c8d-8b82-4a30-bf48-7d011f5bc4f1","type":"BasicTicker"},{"attributes":{},"id":"be8eef32-0723-4efc-ba1d-2d75ed4fcb6c","type":"ToolEvents"},{"attributes":{"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"}},"id":"090f6793-60e8-4773-90fe-1c41399719fd","type":"SaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2e8fd2d-a76d-41c1-a034-932c89acaac6","type":"Rect"},{"attributes":{"data_source":{"id":"379e120e-7e46-4b92-8348-91b57fd44510","type":"ColumnDataSource"},"glyph":{"id":"ab802403-bb52-46b2-a787-4d3a9583d5c8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e093dccd-79cb-4475-9bb9-cafd9a5d1b1f","type":"GlyphRenderer"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"ebc740b1-442c-4d8d-a031-344549c50584","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"},"ticker":{"id":"ad8c21ad-9318-4031-8309-bdb8277b0c11","type":"CategoricalTicker"}},"id":"d9c3dd21-abb8-490d-8133-e61e51bfa40e","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"},"ticker":{"id":"84f98c8d-8b82-4a30-bf48-7d011f5bc4f1","type":"BasicTicker"}},"id":"ccf1e137-a2ad-4ad3-8bf2-1a9bca683247","type":"Grid"},{"attributes":{"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"}},"id":"7886ed12-b118-4481-b3ba-372be84a06cc","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#f22c40"],"cyl":[4],"fill_alpha":[0.8],"height":[5827.5],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["4"],"y":[2913.75]}},"id":"6e94f2d1-709b-44f8-9f15-aafdef0ea4f4","type":"ColumnDataSource"},{"attributes":{"legends":[["3",[{"id":"10f4f09d-055b-400f-93d2-c00929ab1b0b","type":"GlyphRenderer"}]],["4",[{"id":"8ffd3714-50ce-43ff-8746-f5c9561d9d50","type":"GlyphRenderer"}]],["5",[{"id":"e093dccd-79cb-4475-9bb9-cafd9a5d1b1f","type":"GlyphRenderer"}]],["6",[{"id":"3c956d15-a9e2-4afe-bd3a-f14cac3a6055","type":"GlyphRenderer"}]],["8",[{"id":"40550c6b-33b8-41f3-bf48-4c2d677c4893","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"}},"id":"fd439b05-44da-492e-9138-61f1a136b95d","type":"Legend"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#f22c40"],"cyl":[8],"fill_alpha":[0.8],"height":[1541.1999999999998],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["8"],"y":[770.5999999999999]}},"id":"ef068803-eca1-4b49-8dfa-00b6022973f2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"}},"id":"ac08a350-6aca-485c-b311-a791fdfc79ba","type":"PanTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#f22c40"],"cyl":[5],"fill_alpha":[0.8],"height":[82.1],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["5"],"y":[41.05]}},"id":"379e120e-7e46-4b92-8348-91b57fd44510","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[82.2],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["3"],"y":[41.1]}},"id":"9e21c83a-e78d-44bb-844a-a4540264edc5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3df0121e-e595-4b9a-9744-086f2f1a98c2","type":"Rect"},{"attributes":{},"id":"ebc740b1-442c-4d8d-a031-344549c50584","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab802403-bb52-46b2-a787-4d3a9583d5c8","type":"Rect"},{"attributes":{"axis_label":"Sum( Mpg )","formatter":{"id":"e4589694-716b-419b-af85-3f883f9dbbad","type":"BasicTickFormatter"},"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"},"ticker":{"id":"84f98c8d-8b82-4a30-bf48-7d011f5bc4f1","type":"BasicTicker"}},"id":"590a849f-f6a9-4896-a324-168ff6d032e0","type":"LinearAxis"},{"attributes":{"data_source":{"id":"ef068803-eca1-4b49-8dfa-00b6022973f2","type":"ColumnDataSource"},"glyph":{"id":"afd3fac4-861e-4026-a28c-d23889c5ecb5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40550c6b-33b8-41f3-bf48-4c2d677c4893","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"15974f28-2fc5-4666-9d7f-12a91ad6ec11","type":"Rect"},{"attributes":{"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"}},"id":"bd6f4464-6357-4017-ad54-0d58967d4b47","type":"HelpTool"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"b521a140-be87-4fda-9208-6c27b10d8afa","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#f22c40"],"cyl":[6],"fill_alpha":[0.8],"height":[1657.8],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["6"],"y":[828.9]}},"id":"69181f2d-cab1-4384-9088-a018c3292933","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":6118.875},"id":"d3e522c9-6fd9-42ca-a31f-701a5ee3bcad","type":"Range1d"},{"attributes":{"data_source":{"id":"69181f2d-cab1-4384-9088-a018c3292933","type":"ColumnDataSource"},"glyph":{"id":"15974f28-2fc5-4666-9d7f-12a91ad6ec11","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3c956d15-a9e2-4afe-bd3a-f14cac3a6055","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"d9c3dd21-abb8-490d-8133-e61e51bfa40e","type":"CategoricalAxis"}],"height":400,"left":[{"id":"590a849f-f6a9-4896-a324-168ff6d032e0","type":"LinearAxis"}],"renderers":[{"id":"e0ad5343-b32c-421b-9919-07d41245ec16","type":"BoxAnnotation"},{"id":"10f4f09d-055b-400f-93d2-c00929ab1b0b","type":"GlyphRenderer"},{"id":"8ffd3714-50ce-43ff-8746-f5c9561d9d50","type":"GlyphRenderer"},{"id":"e093dccd-79cb-4475-9bb9-cafd9a5d1b1f","type":"GlyphRenderer"},{"id":"3c956d15-a9e2-4afe-bd3a-f14cac3a6055","type":"GlyphRenderer"},{"id":"40550c6b-33b8-41f3-bf48-4c2d677c4893","type":"GlyphRenderer"},{"id":"fd439b05-44da-492e-9138-61f1a136b95d","type":"Legend"},{"id":"d9c3dd21-abb8-490d-8133-e61e51bfa40e","type":"CategoricalAxis"},{"id":"590a849f-f6a9-4896-a324-168ff6d032e0","type":"LinearAxis"},{"id":"ccf1e137-a2ad-4ad3-8bf2-1a9bca683247","type":"Grid"}],"title":{"id":"1316a70f-4437-4aee-bed7-2663a744e767","type":"Title"},"tool_events":{"id":"be8eef32-0723-4efc-ba1d-2d75ed4fcb6c","type":"ToolEvents"},"toolbar":{"id":"9fb9f998-42c0-4e0e-9ba1-a7d30ac6abb9","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"b521a140-be87-4fda-9208-6c27b10d8afa","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"d3e522c9-6fd9-42ca-a31f-701a5ee3bcad","type":"Range1d"}},"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"afd3fac4-861e-4026-a28c-d23889c5ecb5","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ac08a350-6aca-485c-b311-a791fdfc79ba","type":"PanTool"},{"id":"85903ec1-cbc8-4878-b934-9e74ef972f5c","type":"WheelZoomTool"},{"id":"f7377217-1f7c-4b43-afc7-2934833855f9","type":"BoxZoomTool"},{"id":"090f6793-60e8-4773-90fe-1c41399719fd","type":"SaveTool"},{"id":"7886ed12-b118-4481-b3ba-372be84a06cc","type":"ResetTool"},{"id":"bd6f4464-6357-4017-ad54-0d58967d4b47","type":"HelpTool"}]},"id":"9fb9f998-42c0-4e0e-9ba1-a7d30ac6abb9","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0ad5343-b32c-421b-9919-07d41245ec16","type":"BoxAnnotation"},{"attributes":{},"id":"e4589694-716b-419b-af85-3f883f9dbbad","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f99555eb-eb45-4af2-a90d-63ae5d9cea96","subtype":"Chart","type":"Plot"}},"id":"85903ec1-cbc8-4878-b934-9e74ef972f5c","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"9e21c83a-e78d-44bb-844a-a4540264edc5","type":"ColumnDataSource"},"glyph":{"id":"a2e8fd2d-a76d-41c1-a034-932c89acaac6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"10f4f09d-055b-400f-93d2-c00929ab1b0b","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Total MPG by CYL"},"id":"1316a70f-4437-4aee-bed7-2663a744e767","type":"Title"},{"attributes":{"data_source":{"id":"6e94f2d1-709b-44f8-9f15-aafdef0ea4f4","type":"ColumnDataSource"},"glyph":{"id":"3df0121e-e595-4b9a-9744-086f2f1a98c2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ffd3714-50ce-43ff-8746-f5c9561d9d50","type":"GlyphRenderer"}],"root_ids":["f99555eb-eb45-4af2-a90d-63ae5d9cea96"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"d32b48fa-7d8a-4685-aed6-a8ce75d873cd","elementid":"aeb46ac6-bcfa-4782-a6d6-a8d2ac35da0d","modelid":"f99555eb-eb45-4af2-a90d-63ae5d9cea96"}];
              
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