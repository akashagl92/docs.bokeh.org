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
      };var element = document.getElementById("c4ef103e-4765-415a-ad8a-312e3ec476d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c4ef103e-4765-415a-ad8a-312e3ec476d9' but no matching script tag was found. ")
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
                  var docs_json = {"f2d43fb2-b9b2-47d7-b2ba-ea7a4173c683":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31b0e094-f1fe-4300-b4f8-ea3cee796b24","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"722b2009-29e2-42ba-9415-79228ad63082","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"416dc08d-92b1-4d92-aac5-5575cdbad809","type":"Rect"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"25d303f1-e734-4d95-901c-3f815e5c2673","type":"GlyphRenderer"}]},"id":"7f020022-8aa6-42db-a3f4-0937c9924d9c","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1f99b6c4-a601-4342-91fa-e45a16962d86","type":"PanTool"},{"id":"1f4c498b-29f7-4fa0-80ca-b322200fc897","type":"WheelZoomTool"},{"id":"61f96f8b-73bc-4210-b4b2-639187d888f5","type":"BoxZoomTool"},{"id":"64ef9de0-24b5-4b6a-ad83-d29e768cf1ad","type":"SaveTool"},{"id":"cf74de6c-e0ae-42dd-bf66-ed9740c75ece","type":"ResetTool"},{"id":"41ce0351-7734-43f9-9ea6-ea2bc3bc5ba7","type":"HelpTool"}]},"id":"5eed7ffd-aa90-4426-bb17-73f0a05dd62f","type":"Toolbar"},{"attributes":{"items":[{"id":"750bc16f-6b7a-453e-a9e0-3598f01c7630","type":"LegendItem"},{"id":"7f020022-8aa6-42db-a3f4-0937c9924d9c","type":"LegendItem"},{"id":"1a35b349-318b-406c-8bb5-9ea12ac2a6ad","type":"LegendItem"},{"id":"88e1e369-d4f1-41a8-87e8-9b694e04bedf","type":"LegendItem"},{"id":"37cbb5fb-dbe7-43bc-a63c-94bae7b5c145","type":"LegendItem"}],"location":"top_left","plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"}},"id":"210e5976-1993-4c1a-b520-8eefd9d039c4","type":"Legend"},{"attributes":{"callback":null,"end":6118.875},"id":"88996c68-3ea2-494a-86ea-605f7451699f","type":"Range1d"},{"attributes":{},"id":"c4a00264-3cc8-4be9-9a5f-64b08ebf1d4f","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"1ff3c9bc-aed1-4b6d-8393-523c3da5c1ab","type":"BoxAnnotation"},"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"}},"id":"61f96f8b-73bc-4210-b4b2-639187d888f5","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"62ce4fcf-87d8-4716-878a-7ab138a4191d","type":"ColumnDataSource"},"glyph":{"id":"a29ffd47-48cb-4425-81c6-278189e94219","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"25d303f1-e734-4d95-901c-3f815e5c2673","type":"GlyphRenderer"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"40aeb1fd-30c5-42ed-b046-b74af9e1985c","type":"GlyphRenderer"}]},"id":"750bc16f-6b7a-453e-a9e0-3598f01c7630","type":"LegendItem"},{"attributes":{},"id":"a1f3cc37-95da-4f61-8f65-181e026eff3b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d1ad4bb3-cb99-4083-8571-5549b9dba055","type":"ColumnDataSource"},"glyph":{"id":"416dc08d-92b1-4d92-aac5-5575cdbad809","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40aeb1fd-30c5-42ed-b046-b74af9e1985c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#f22c40"],"cyl":[4],"fill_alpha":[0.8],"height":[5827.5],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["4"],"y":[2913.75]}},"id":"62ce4fcf-87d8-4716-878a-7ab138a4191d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"}},"id":"1f4c498b-29f7-4fa0-80ca-b322200fc897","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a29ffd47-48cb-4425-81c6-278189e94219","type":"Rect"},{"attributes":{"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"}},"id":"64ef9de0-24b5-4b6a-ad83-d29e768cf1ad","type":"SaveTool"},{"attributes":{},"id":"67248a69-c6ae-43de-bc00-8bdd6b924416","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9fe1b2af-d1f5-4044-8131-1f542e430e96","type":"ColumnDataSource"},"glyph":{"id":"722b2009-29e2-42ba-9415-79228ad63082","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"14073150-6541-4f1f-b8c9-923e7627bc97","type":"GlyphRenderer"},{"attributes":{"axis_label":"Sum( Mpg )","formatter":{"id":"6d908a72-b965-4007-adb0-48f8e6d932cd","type":"BasicTickFormatter"},"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"},"ticker":{"id":"a1f3cc37-95da-4f61-8f65-181e026eff3b","type":"BasicTicker"}},"id":"cda6b711-9843-4b60-a430-5ff2852b9c4b","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#f22c40"],"cyl":[5],"fill_alpha":[0.8],"height":[82.1],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["5"],"y":[41.05]}},"id":"90977ec1-b90d-4151-b103-d03fc3d1f936","type":"ColumnDataSource"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"64386428-435d-4dea-82d7-ae96642546eb","type":"GlyphRenderer"}]},"id":"88e1e369-d4f1-41a8-87e8-9b694e04bedf","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"},"ticker":{"id":"a1f3cc37-95da-4f61-8f65-181e026eff3b","type":"BasicTicker"}},"id":"5c95e6bf-c42f-4f28-8ee6-c5da0fabcfdd","type":"Grid"},{"attributes":{"below":[{"id":"82d97583-aba2-48cc-8bdb-9295bfb146c3","type":"CategoricalAxis"}],"height":400,"left":[{"id":"cda6b711-9843-4b60-a430-5ff2852b9c4b","type":"LinearAxis"}],"renderers":[{"id":"1ff3c9bc-aed1-4b6d-8393-523c3da5c1ab","type":"BoxAnnotation"},{"id":"40aeb1fd-30c5-42ed-b046-b74af9e1985c","type":"GlyphRenderer"},{"id":"25d303f1-e734-4d95-901c-3f815e5c2673","type":"GlyphRenderer"},{"id":"d9e2f891-509b-44e5-8b24-bd99dd19eeee","type":"GlyphRenderer"},{"id":"64386428-435d-4dea-82d7-ae96642546eb","type":"GlyphRenderer"},{"id":"14073150-6541-4f1f-b8c9-923e7627bc97","type":"GlyphRenderer"},{"id":"210e5976-1993-4c1a-b520-8eefd9d039c4","type":"Legend"},{"id":"82d97583-aba2-48cc-8bdb-9295bfb146c3","type":"CategoricalAxis"},{"id":"cda6b711-9843-4b60-a430-5ff2852b9c4b","type":"LinearAxis"},{"id":"5c95e6bf-c42f-4f28-8ee6-c5da0fabcfdd","type":"Grid"}],"title":{"id":"33f52d9a-d318-4867-9d0c-09aaa05b4a83","type":"Title"},"tool_events":{"id":"67248a69-c6ae-43de-bc00-8bdd6b924416","type":"ToolEvents"},"toolbar":{"id":"5eed7ffd-aa90-4426-bb17-73f0a05dd62f","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"2c57cdf4-dba6-47ee-bb69-b850c60dde16","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"88996c68-3ea2-494a-86ea-605f7451699f","type":"Range1d"}},"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[82.2],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["3"],"y":[41.1]}},"id":"d1ad4bb3-cb99-4083-8571-5549b9dba055","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"2c57cdf4-dba6-47ee-bb69-b850c60dde16","type":"FactorRange"},{"attributes":{"data_source":{"id":"a4aa439a-0915-42b4-9de2-c19dd7e71c51","type":"ColumnDataSource"},"glyph":{"id":"6b07ff44-de3d-42ac-a5de-1d1f65daf048","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64386428-435d-4dea-82d7-ae96642546eb","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"90977ec1-b90d-4151-b103-d03fc3d1f936","type":"ColumnDataSource"},"glyph":{"id":"31b0e094-f1fe-4300-b4f8-ea3cee796b24","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9e2f891-509b-44e5-8b24-bd99dd19eeee","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"}},"id":"1f99b6c4-a601-4342-91fa-e45a16962d86","type":"PanTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#f22c40"],"cyl":[6],"fill_alpha":[0.8],"height":[1657.8],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["6"],"y":[828.9]}},"id":"a4aa439a-0915-42b4-9de2-c19dd7e71c51","type":"ColumnDataSource"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"14073150-6541-4f1f-b8c9-923e7627bc97","type":"GlyphRenderer"}]},"id":"37cbb5fb-dbe7-43bc-a63c-94bae7b5c145","type":"LegendItem"},{"attributes":{"plot":null,"text":"Total MPG by CYL"},"id":"33f52d9a-d318-4867-9d0c-09aaa05b4a83","type":"Title"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"d9e2f891-509b-44e5-8b24-bd99dd19eeee","type":"GlyphRenderer"}]},"id":"1a35b349-318b-406c-8bb5-9ea12ac2a6ad","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#f22c40"],"cyl":[8],"fill_alpha":[0.8],"height":[1541.1999999999998],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["8"],"y":[770.5999999999999]}},"id":"9fe1b2af-d1f5-4044-8131-1f542e430e96","type":"ColumnDataSource"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"fc2cdcd5-e772-4cc2-8e6d-264c9a8c9c79","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"},"ticker":{"id":"c4a00264-3cc8-4be9-9a5f-64b08ebf1d4f","type":"CategoricalTicker"}},"id":"82d97583-aba2-48cc-8bdb-9295bfb146c3","type":"CategoricalAxis"},{"attributes":{},"id":"fc2cdcd5-e772-4cc2-8e6d-264c9a8c9c79","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"}},"id":"cf74de6c-e0ae-42dd-bf66-ed9740c75ece","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b07ff44-de3d-42ac-a5de-1d1f65daf048","type":"Rect"},{"attributes":{},"id":"6d908a72-b965-4007-adb0-48f8e6d932cd","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e","subtype":"Chart","type":"Plot"}},"id":"41ce0351-7734-43f9-9ea6-ea2bc3bc5ba7","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1ff3c9bc-aed1-4b6d-8393-523c3da5c1ab","type":"BoxAnnotation"}],"root_ids":["d9ea87a2-49ed-47a7-90ff-3c1136d4504e"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"f2d43fb2-b9b2-47d7-b2ba-ea7a4173c683","elementid":"c4ef103e-4765-415a-ad8a-312e3ec476d9","modelid":"d9ea87a2-49ed-47a7-90ff-3c1136d4504e"}];
                  
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