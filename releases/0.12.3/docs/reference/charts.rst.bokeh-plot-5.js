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
      };var element = document.getElementById("ec573282-e758-4275-b49f-c720d701f8c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ec573282-e758-4275-b49f-c720d701f8c7' but no matching script tag was found. ")
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
                  var docs_json = {"7dc134e4-70d7-4367-8ec4-72affb2e31b3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2fba3604-40c1-400d-9ef9-c0d3ef2cae63","type":"PanTool"},{"id":"f3798df1-fdfb-42ff-b0a1-7f7d0f434af1","type":"WheelZoomTool"},{"id":"a61a8d56-63ea-4641-94fa-e306bc5001ae","type":"BoxZoomTool"},{"id":"61fbee8d-454e-4bb8-9edd-15c143e0cace","type":"SaveTool"},{"id":"eea16b33-7ffe-4f78-8855-a84ac93ce518","type":"ResetTool"},{"id":"1e66affc-4ce5-412b-8232-8c8bdfbbd746","type":"HelpTool"}]},"id":"de57433b-671f-4a8e-a76e-50b7cf8854af","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4202db07-c828-44cf-86c8-628bc09cd9b2","type":"Rect"},{"attributes":{"axis_label":"sample","formatter":{"id":"c012ec5b-5b80-4b11-86d0-73eb27889cab","type":"BasicTickFormatter"},"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"},"ticker":{"id":"d1b375d2-c334-4efc-9532-f974673e5713","type":"BasicTicker"}},"id":"bbacbd96-43d9-4c80-a92b-22ee6b463247","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(4.5, 5.7]"},{"fruit_count":"(4.5, 5.7]"}],"fruit_count":["(4.5, 5.7]","(4.5, 5.7]"],"values":[5,5],"x":["apples","pears"],"y":[2,2]}},"id":"c6d24c5b-8d70-4246-ad04-69783533fc42","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"[1, 2.2]"},{"fruit_count":"[1, 2.2]"}],"fruit_count":["[1, 2.2]","[1, 2.2]"],"values":[1,2],"x":["bananas","bananas"],"y":[1,2]}},"id":"9b5d9907-71aa-4aee-ada4-d82949089d00","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"dbdfb948-b46b-4cbc-9eb2-7ec6d43d524d","type":"ColumnDataSource"},"glyph":{"id":"4202db07-c828-44cf-86c8-628bc09cd9b2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"869f556d-933b-4b53-9004-742935f8800a","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"91e90bbd-826e-46e2-ab66-fa090c6c2a87","type":"BoxAnnotation"},{"attributes":{"label":{"value":"(4.5, 5.7]"},"renderers":[{"id":"9625afba-8f51-4a67-9ccb-fb3c6dbe054f","type":"GlyphRenderer"}]},"id":"03035954-5a73-44e1-8d01-8096a2bf722b","type":"LegendItem"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c121851a-eb85-49a7-b8ef-329ef511853e","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"997648ad-597a-4c5e-9de4-b5bdba90ab82","type":"Rect"},{"attributes":{"overlay":{"id":"91e90bbd-826e-46e2-ab66-fa090c6c2a87","type":"BoxAnnotation"},"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"}},"id":"a61a8d56-63ea-4641-94fa-e306bc5001ae","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"5cdca9b4-17db-49b9-b1a8-009fe67c933f","type":"CategoricalAxis"}],"height":400,"left":[{"id":"bbacbd96-43d9-4c80-a92b-22ee6b463247","type":"LinearAxis"}],"renderers":[{"id":"91e90bbd-826e-46e2-ab66-fa090c6c2a87","type":"BoxAnnotation"},{"id":"14b565d4-141e-43d1-ae72-7128f9b6ddf4","type":"GlyphRenderer"},{"id":"e5fe3d47-c8ca-4626-bd75-55209f5537ac","type":"GlyphRenderer"},{"id":"9625afba-8f51-4a67-9ccb-fb3c6dbe054f","type":"GlyphRenderer"},{"id":"869f556d-933b-4b53-9004-742935f8800a","type":"GlyphRenderer"},{"id":"ac750745-a115-41aa-9a6c-11eb27aefeb1","type":"GlyphRenderer"},{"id":"a154931b-8f2c-4409-8bad-70c3c3c08773","type":"Legend"},{"id":"5cdca9b4-17db-49b9-b1a8-009fe67c933f","type":"CategoricalAxis"},{"id":"bbacbd96-43d9-4c80-a92b-22ee6b463247","type":"LinearAxis"}],"title":{"id":"f15c58cf-620e-478a-a65d-ef4261e0d2df","type":"Title"},"tool_events":{"id":"99b0c26a-ba3c-4731-80d9-5148e6485c3f","type":"ToolEvents"},"toolbar":{"id":"de57433b-671f-4a8e-a76e-50b7cf8854af","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"8dd3f4e8-783a-41f7-b7d6-ab9b0cc62804","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"4e54e5ef-16d3-4294-8578-d0df3cafaede","type":"Range1d"}},"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(6.8, 8]"}],"fruit_count":["(6.8, 8]"],"values":[8],"x":["apples"],"y":[3]}},"id":"51a2f932-a573-4185-abed-37e9a29f53d0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"}},"id":"2fba3604-40c1-400d-9ef9-c0d3ef2cae63","type":"PanTool"},{"attributes":{"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"}},"id":"61fbee8d-454e-4bb8-9edd-15c143e0cace","type":"SaveTool"},{"attributes":{},"id":"c012ec5b-5b80-4b11-86d0-73eb27889cab","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"4655134c-30b8-4d11-b2a7-ad90328ee5e1","type":"LegendItem"},{"id":"a6871211-a864-4842-bfb2-d81aca0008db","type":"LegendItem"},{"id":"03035954-5a73-44e1-8d01-8096a2bf722b","type":"LegendItem"},{"id":"e1d52a2c-999e-4c89-bf63-cdcbcb9a7d13","type":"LegendItem"},{"id":"d151790f-8be3-4488-b0c2-1796cb7ffd1f","type":"LegendItem"}],"location":"top_left","plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"}},"id":"a154931b-8f2c-4409-8bad-70c3c3c08773","type":"Legend"},{"attributes":{},"id":"d1b375d2-c334-4efc-9532-f974673e5713","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"}],"fruit_count":["(3.3, 4.5]","(3.3, 4.5]","(3.3, 4.5]"],"values":[4,4,4],"x":["apples","bananas","pears"],"y":[1,3,3]}},"id":"dbdfb948-b46b-4cbc-9eb2-7ec6d43d524d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"}},"id":"f3798df1-fdfb-42ff-b0a1-7f7d0f434af1","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":3.77,"start":0.22999999999999998},"id":"4e54e5ef-16d3-4294-8578-d0df3cafaede","type":"Range1d"},{"attributes":{"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"}},"id":"1e66affc-4ce5-412b-8232-8c8bdfbbd746","type":"HelpTool"},{"attributes":{"data_source":{"id":"c6d24c5b-8d70-4246-ad04-69783533fc42","type":"ColumnDataSource"},"glyph":{"id":"54463233-b5c2-4173-8918-65137c022d67","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9625afba-8f51-4a67-9ccb-fb3c6dbe054f","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fruits"},"id":"f15c58cf-620e-478a-a65d-ef4261e0d2df","type":"Title"},{"attributes":{"label":{"value":"[1, 2.2]"},"renderers":[{"id":"ac750745-a115-41aa-9a6c-11eb27aefeb1","type":"GlyphRenderer"}]},"id":"d151790f-8be3-4488-b0c2-1796cb7ffd1f","type":"LegendItem"},{"attributes":{"label":{"value":"(5.7, 6.8]"},"renderers":[{"id":"e5fe3d47-c8ca-4626-bd75-55209f5537ac","type":"GlyphRenderer"}]},"id":"a6871211-a864-4842-bfb2-d81aca0008db","type":"LegendItem"},{"attributes":{"axis_label":"fruit","formatter":{"id":"419035ba-76c2-43b8-ba98-5ada1e8e58d7","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"},"ticker":{"id":"9bf80a75-5364-4bbb-bfde-4164dbd640e6","type":"CategoricalTicker"}},"id":"5cdca9b4-17db-49b9-b1a8-009fe67c933f","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(5.7, 6.8]"}],"fruit_count":["(5.7, 6.8]"],"values":[6],"x":["pears"],"y":[1]}},"id":"af514911-5c52-4598-b7bf-1a5f98a12683","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"54463233-b5c2-4173-8918-65137c022d67","type":"Rect"},{"attributes":{"data_source":{"id":"51a2f932-a573-4185-abed-37e9a29f53d0","type":"ColumnDataSource"},"glyph":{"id":"997648ad-597a-4c5e-9de4-b5bdba90ab82","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"14b565d4-141e-43d1-ae72-7128f9b6ddf4","type":"GlyphRenderer"},{"attributes":{},"id":"9bf80a75-5364-4bbb-bfde-4164dbd640e6","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"63c3d081-1105-41e2-b000-6fbe62e2bad5","subtype":"Chart","type":"Plot"}},"id":"eea16b33-7ffe-4f78-8855-a84ac93ce518","type":"ResetTool"},{"attributes":{"label":{"value":"(6.8, 8]"},"renderers":[{"id":"14b565d4-141e-43d1-ae72-7128f9b6ddf4","type":"GlyphRenderer"}]},"id":"4655134c-30b8-4d11-b2a7-ad90328ee5e1","type":"LegendItem"},{"attributes":{},"id":"99b0c26a-ba3c-4731-80d9-5148e6485c3f","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9b5d9907-71aa-4aee-ada4-d82949089d00","type":"ColumnDataSource"},"glyph":{"id":"2ab91767-3c86-4d58-a95c-c5ba7b824b2e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ac750745-a115-41aa-9a6c-11eb27aefeb1","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["apples","bananas","pears"]},"id":"8dd3f4e8-783a-41f7-b7d6-ab9b0cc62804","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ab91767-3c86-4d58-a95c-c5ba7b824b2e","type":"Rect"},{"attributes":{},"id":"419035ba-76c2-43b8-ba98-5ada1e8e58d7","type":"CategoricalTickFormatter"},{"attributes":{"label":{"value":"(3.3, 4.5]"},"renderers":[{"id":"869f556d-933b-4b53-9004-742935f8800a","type":"GlyphRenderer"}]},"id":"e1d52a2c-999e-4c89-bf63-cdcbcb9a7d13","type":"LegendItem"},{"attributes":{"data_source":{"id":"af514911-5c52-4598-b7bf-1a5f98a12683","type":"ColumnDataSource"},"glyph":{"id":"c121851a-eb85-49a7-b8ef-329ef511853e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e5fe3d47-c8ca-4626-bd75-55209f5537ac","type":"GlyphRenderer"}],"root_ids":["63c3d081-1105-41e2-b000-6fbe62e2bad5"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7dc134e4-70d7-4367-8ec4-72affb2e31b3","elementid":"ec573282-e758-4275-b49f-c720d701f8c7","modelid":"63c3d081-1105-41e2-b000-6fbe62e2bad5"}];
                  
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