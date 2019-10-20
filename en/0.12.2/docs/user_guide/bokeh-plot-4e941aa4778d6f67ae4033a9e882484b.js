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
      };var element = document.getElementById("e463a149-1288-4c50-90a5-e45e2ec5dfd5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e463a149-1288-4c50-90a5-e45e2ec5dfd5' but no matching script tag was found. ")
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
                  var docs_json = {"0fa5fd34-30da-466c-80a5-5a546d605998":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8,"origin":1}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[14.963106796116502],"label":[{"cyl":8,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[55.139802355771174]}},"id":"548c969d-f941-4e02-9d01-5762eea32597","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4,"origin":2}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.10655737704918],"label":[{"cyl":4,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[14.05327868852459]}},"id":"0ec294d5-1ab8-42e0-b7d1-3901086e70a8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6,"origin":1}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[19.645205479452052],"label":[{"cyl":6,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[37.83564621798689]}},"id":"f54001e5-3155-47a3-ab0f-9a1d2337cc17","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0ec294d5-1ab8-42e0-b7d1-3901086e70a8","type":"ColumnDataSource"},"glyph":{"id":"879332f9-9388-467d-836c-31b4ccc41c5d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"641ca063-0193-45fe-ace7-0e4d4dfd855f","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5b56ff26-b20b-40dd-ad9f-856ee52f1806","type":"PanTool"},{"id":"577c4576-4dbc-403b-82cc-8f016f974852","type":"WheelZoomTool"},{"id":"b58f510f-1226-41e1-ac7c-4b2c6533b45c","type":"BoxZoomTool"},{"id":"81b38174-f435-4e78-9866-b34c99f83f07","type":"SaveTool"},{"id":"269e7709-bae6-4df3-80f7-e00a7fec0bea","type":"ResetTool"},{"id":"24e1269f-6458-4bb0-acc0-b221e55640ef","type":"HelpTool"}]},"id":"4fda0f84-e813-4915-92db-e9f7d12faf6f","type":"Toolbar"},{"attributes":{"data_source":{"id":"ef4b5e6b-5441-4810-bd77-7302c7eef3e6","type":"ColumnDataSource"},"glyph":{"id":"3dd28c68-0671-4e5a-ba3f-588cebe72c7b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ebf802b1-ef27-400b-8d7b-57c96e3791e1","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"9801950f-d32e-45de-bee5-97a032ab7f5f","type":"BoxAnnotation"},"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"}},"id":"b58f510f-1226-41e1-ac7c-4b2c6533b45c","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e60decdb-2997-429b-b4b5-00e21fa54d03","type":"Rect"},{"attributes":{"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"}},"id":"577c4576-4dbc-403b-82cc-8f016f974852","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"9d6707ce-be98-49aa-b55d-2ee0de70116e","type":"ColumnDataSource"},"glyph":{"id":"5992e61c-5ebd-47d8-86f4-023249910dd8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1ed33005-fc8a-4d5c-ac9f-8139fbe05686","type":"GlyphRenderer"},{"attributes":{},"id":"8460dff7-030b-4a1f-b219-ee1cf692ea3d","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9bd17955-d81b-4670-94c5-16f625d99036","type":"Rect"},{"attributes":{"data_source":{"id":"9244c819-cfbe-44b1-badf-75e46fddfb6d","type":"ColumnDataSource"},"glyph":{"id":"dd0f3967-b762-47de-b8cd-f0790bd84abf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2f24f6b-09a8-47d8-8c96-bea3b9445921","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6,"origin":3}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[23.883333333333336],"label":[{"cyl":6,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[64.08731884057971]}},"id":"9244c819-cfbe-44b1-badf-75e46fddfb6d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"548c969d-f941-4e02-9d01-5762eea32597","type":"ColumnDataSource"},"glyph":{"id":"9d47b6b5-168a-4635-b6a1-d6aeef36007c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a301a57f-5099-4acf-9c0c-65e042872f3a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4,"origin":3}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[31.59565217391305],"label":[{"cyl":4,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[36.34782608695652]}},"id":"9d6707ce-be98-49aa-b55d-2ee0de70116e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9d47b6b5-168a-4635-b6a1-d6aeef36007c","type":"Rect"},{"attributes":{"axis_label":"Origin","formatter":{"id":"ad08b474-141a-43aa-9564-e214a32c851a","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"},"ticker":{"id":"bda4a543-6c6b-4f22-80bb-334b62fe1b3d","type":"CategoricalTicker"}},"id":"73273d45-0b41-48ad-b10d-58648ab44042","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3,"origin":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[20.55],"label":[{"cyl":3,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[10.275]}},"id":"ef4b5e6b-5441-4810-bd77-7302c7eef3e6","type":"ColumnDataSource"},{"attributes":{},"id":"ad08b474-141a-43aa-9564-e214a32c851a","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"}},"id":"269e7709-bae6-4df3-80f7-e00a7fec0bea","type":"ResetTool"},{"attributes":{"data_source":{"id":"f54001e5-3155-47a3-ab0f-9a1d2337cc17","type":"ColumnDataSource"},"glyph":{"id":"8dc55e85-70c6-4b54-a7b0-eb3cce620231","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e41d27f3-c717-449a-b33e-94af354ed662","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4,"origin":1}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.01304347826087],"label":[{"cyl":4,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[14.006521739130434]}},"id":"25117966-123d-41f9-b7b8-4f4f09beaea7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"}},"id":"5b56ff26-b20b-40dd-ad9f-856ee52f1806","type":"PanTool"},{"attributes":{"legends":[["3",[{"id":"ebf802b1-ef27-400b-8d7b-57c96e3791e1","type":"GlyphRenderer"}]],["4",[{"id":"3d165f31-2758-43f3-8117-6d9814f98297","type":"GlyphRenderer"}]],["5",[{"id":"85c8251f-183e-43e0-b638-f91f5d5ac5b7","type":"GlyphRenderer"}]],["6",[{"id":"e41d27f3-c717-449a-b33e-94af354ed662","type":"GlyphRenderer"}]],["8",[{"id":"a301a57f-5099-4acf-9c0c-65e042872f3a","type":"GlyphRenderer"}]]],"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"}},"id":"7d5e2fca-d52d-45be-92db-73115d392e1a","type":"Legend"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6,"origin":2}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[20.1],"label":[{"cyl":6,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[65.52322404371584]}},"id":"a766d509-afde-4b35-951d-08804a81111b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8dc55e85-70c6-4b54-a7b0-eb3cce620231","type":"Rect"},{"attributes":{"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"}},"id":"24e1269f-6458-4bb0-acc0-b221e55640ef","type":"HelpTool"},{"attributes":{"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"}},"id":"81b38174-f435-4e78-9866-b34c99f83f07","type":"SaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef4a8605-c233-457b-ae2d-9c2d72990cf3","type":"Rect"},{"attributes":{"data_source":{"id":"a766d509-afde-4b35-951d-08804a81111b","type":"ColumnDataSource"},"glyph":{"id":"e60decdb-2997-429b-b4b5-00e21fa54d03","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"572e6679-0890-408f-af7d-40d4791d266b","type":"GlyphRenderer"},{"attributes":{},"id":"0c7e989b-4bf8-4d33-bd5b-d0aaf52e1c4d","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e297ecb1-a424-4427-975e-6f7a16079157","type":"ColumnDataSource"},"glyph":{"id":"ef4a8605-c233-457b-ae2d-9c2d72990cf3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"85c8251f-183e-43e0-b638-f91f5d5ac5b7","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5992e61c-5ebd-47d8-86f4-023249910dd8","type":"Rect"},{"attributes":{"axis_label":"Mean( Mpg )","formatter":{"id":"8460dff7-030b-4a1f-b219-ee1cf692ea3d","type":"BasicTickFormatter"},"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"},"ticker":{"id":"39a1ab0d-546f-4e24-bb41-8c2f9775a91c","type":"BasicTicker"}},"id":"80cbc7a8-554b-4cba-8a37-2ff238f7dc1b","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Avg MPG by ORIGIN, stacked by CYL"},"id":"933e6f31-7451-49f5-9444-28fa4efe5360","type":"Title"},{"attributes":{"callback":null,"factors":["1","2","3"]},"id":"8a813463-b831-467e-9c34-d2baf4c85921","type":"FactorRange"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3dd28c68-0671-4e5a-ba3f-588cebe72c7b","type":"Rect"},{"attributes":{"data_source":{"id":"25117966-123d-41f9-b7b8-4f4f09beaea7","type":"ColumnDataSource"},"glyph":{"id":"9bd17955-d81b-4670-94c5-16f625d99036","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3d165f31-2758-43f3-8117-6d9814f98297","type":"GlyphRenderer"},{"attributes":{},"id":"39a1ab0d-546f-4e24-bb41-8c2f9775a91c","type":"BasicTicker"},{"attributes":{},"id":"bda4a543-6c6b-4f22-80bb-334b62fe1b3d","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd0f3967-b762-47de-b8cd-f0790bd84abf","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"},"ticker":{"id":"39a1ab0d-546f-4e24-bb41-8c2f9775a91c","type":"BasicTicker"}},"id":"2336e8e2-2a96-4e3e-9a63-0d93b8d0fef8","type":"Grid"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5,"origin":2}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[27.366666666666664],"label":[{"cyl":5,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[41.789890710382515]}},"id":"e297ecb1-a424-4427-975e-6f7a16079157","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"73273d45-0b41-48ad-b10d-58648ab44042","type":"CategoricalAxis"}],"height":400,"left":[{"id":"80cbc7a8-554b-4cba-8a37-2ff238f7dc1b","type":"LinearAxis"}],"renderers":[{"id":"9801950f-d32e-45de-bee5-97a032ab7f5f","type":"BoxAnnotation"},{"id":"ebf802b1-ef27-400b-8d7b-57c96e3791e1","type":"GlyphRenderer"},{"id":"3d165f31-2758-43f3-8117-6d9814f98297","type":"GlyphRenderer"},{"id":"1ed33005-fc8a-4d5c-ac9f-8139fbe05686","type":"GlyphRenderer"},{"id":"641ca063-0193-45fe-ace7-0e4d4dfd855f","type":"GlyphRenderer"},{"id":"85c8251f-183e-43e0-b638-f91f5d5ac5b7","type":"GlyphRenderer"},{"id":"e41d27f3-c717-449a-b33e-94af354ed662","type":"GlyphRenderer"},{"id":"572e6679-0890-408f-af7d-40d4791d266b","type":"GlyphRenderer"},{"id":"c2f24f6b-09a8-47d8-8c96-bea3b9445921","type":"GlyphRenderer"},{"id":"a301a57f-5099-4acf-9c0c-65e042872f3a","type":"GlyphRenderer"},{"id":"7d5e2fca-d52d-45be-92db-73115d392e1a","type":"Legend"},{"id":"73273d45-0b41-48ad-b10d-58648ab44042","type":"CategoricalAxis"},{"id":"80cbc7a8-554b-4cba-8a37-2ff238f7dc1b","type":"LinearAxis"},{"id":"2336e8e2-2a96-4e3e-9a63-0d93b8d0fef8","type":"Grid"}],"title":{"id":"933e6f31-7451-49f5-9444-28fa4efe5360","type":"Title"},"tool_events":{"id":"0c7e989b-4bf8-4d33-bd5b-d0aaf52e1c4d","type":"ToolEvents"},"toolbar":{"id":"4fda0f84-e813-4915-92db-e9f7d12faf6f","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"8a813463-b831-467e-9c34-d2baf4c85921","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"cc7730c1-c48a-42a8-9de2-8e0173e4f8a2","type":"Range1d"}},"id":"3aef8276-a994-48e0-b3e2-2de37ac59983","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":79.8304347826087},"id":"cc7730c1-c48a-42a8-9de2-8e0173e4f8a2","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"879332f9-9388-467d-836c-31b4ccc41c5d","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9801950f-d32e-45de-bee5-97a032ab7f5f","type":"BoxAnnotation"}],"root_ids":["3aef8276-a994-48e0-b3e2-2de37ac59983"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"0fa5fd34-30da-466c-80a5-5a546d605998","elementid":"e463a149-1288-4c50-90a5-e45e2ec5dfd5","modelid":"3aef8276-a994-48e0-b3e2-2de37ac59983"}];
                  
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