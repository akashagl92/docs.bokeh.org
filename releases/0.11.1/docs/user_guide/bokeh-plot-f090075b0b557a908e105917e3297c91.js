
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
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
  };var element = document.getElementById("a5d0071e-9b70-42ff-893a-bb1c7cb08d43");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5d0071e-9b70-42ff-893a-bb1c7cb08d43' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b3b59d9d-9290-4162-98ae-69b4576dc6f0":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x1s","y1s","x0s","y0s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"2e8a240c-8503-488a-af8e-54c164cb621f","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"f5683f52-6a06-43c4-b06c-f8f4a48f2e3a","type":"Segment"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"0aab3d8c-963e-412c-bf94-ab6f2cdf0c1f","type":"Segment"},{"attributes":{},"id":"a0a536cb-e274-4202-97bc-91bd90b9085a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc288b3d-5cc4-4edc-81ad-25d735136335","type":"Rect"},{"attributes":{"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"}},"id":"653aa2ad-860d-4201-8289-1950fc2c1da4","type":"PanTool"},{"attributes":{},"id":"d58995d1-5077-4321-a29d-f425d04d7c91","type":"BasicTicker"},{"attributes":{"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"}},"id":"874b8847-5252-4b25-b33d-d8e85b172198","type":"ResetTool"},{"attributes":{"data_source":{"id":"08a4517e-8a9a-4741-ba0a-1f27e52d9d80","type":"ColumnDataSource"},"glyph":{"id":"9dee370f-53b4-41fe-a75c-b5e013337988","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fe0f564f-5c66-4ad0-a786-def0ef6a7e08","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"d985420c-1054-4c5b-a096-ae4a98ec06e5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"92311545-9ac7-4517-bc6d-2408af9c1bfa","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"551c026a-e2df-46b0-a752-f2a8d759a79c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"}},"id":"eb4a0580-53bc-421a-84b4-b09cbf36a828","type":"HelpTool"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"27ae7986-115d-4941-a7fc-2d427fac7871","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"},"ticker":{"id":"9e8febd1-bd5b-4311-a7d5-ffd5f614ceb4","type":"CategoricalTicker"}},"id":"1cbb1492-031b-4806-815d-0df8514a8028","type":"CategoricalAxis"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"5e86ac4c-db99-4282-9d73-05de43d13a83","type":"Segment"},{"attributes":{"data_source":{"id":"4456a747-c0fd-4820-829c-f6061a6c6509","type":"ColumnDataSource"},"glyph":{"id":"cf583a00-acf4-407b-8ca5-ed1ef4463f5e","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec209bfa-4626-4a50-a3b0-0b12c8a7071b","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"cf583a00-acf4-407b-8ca5-ed1ef4463f5e","type":"Segment"},{"attributes":{"data_source":{"id":"d985420c-1054-4c5b-a096-ae4a98ec06e5","type":"ColumnDataSource"},"glyph":{"id":"39e3e79e-720d-4e14-b348-f4bc47c59179","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8aa2eeba-86df-4a40-ac57-f233bb62c2c6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2bd7fd36-2b98-4405-934e-c151276d885a","type":"ColumnDataSource"},"glyph":{"id":"16d97932-aafe-4fe5-b94c-5ed297fe06bd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f6c9562a-284e-4e00-9454-9affcdc5603f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7268a34c-8f15-4be6-90af-916f76d0f05b","type":"ColumnDataSource"},"glyph":{"id":"84de95ac-8334-4758-b0bb-4afcf5e6d974","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2507a1e-5b5d-4517-86a0-3c031b54241b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"551c026a-e2df-46b0-a752-f2a8d759a79c","type":"ColumnDataSource"},"glyph":{"id":"56bf3c90-c45a-4373-a045-dbc98314a329","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"14e2b177-9600-4046-9fe7-28997ec5ba62","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"39e3e79e-720d-4e14-b348-f4bc47c59179","type":"Rect"},{"attributes":{"data_source":{"id":"90a72688-5401-4f84-bcf3-45ec7d1008ca","type":"ColumnDataSource"},"glyph":{"id":"0aab3d8c-963e-412c-bf94-ab6f2cdf0c1f","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"797d0990-337d-4622-8745-0fd8f1b57a43","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"9dee370f-53b4-41fe-a75c-b5e013337988","type":"Segment"},{"attributes":{"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"}},"id":"fbb7ecaa-50ec-4320-afbd-71d2a8fcfc11","type":"ResizeTool"},{"attributes":{"data_source":{"id":"9bf94747-b085-4c1f-9d3f-0447f1020203","type":"ColumnDataSource"},"glyph":{"id":"4a1425e6-21c4-4dce-a989-1eb3b82469d2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b0b5d48a-a192-49ea-af6f-acc9dbd5bff8","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4d5a874c-6bce-488e-87ce-9e4f36a59023","type":"BoxAnnotation"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"a0a536cb-e274-4202-97bc-91bd90b9085a","type":"BasicTickFormatter"},"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"},"ticker":{"id":"d58995d1-5077-4321-a29d-f425d04d7c91","type":"BasicTicker"}},"id":"66c6153c-c227-4fd6-a877-a67056ba232a","type":"LinearAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"84de95ac-8334-4758-b0bb-4afcf5e6d974","type":"Rect"},{"attributes":{"callback":null,"column_names":["x1s","y1s","x0s","y0s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"54e81bd7-1e59-4f37-b5ba-e39207670cef","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"},"ticker":{"id":"d58995d1-5077-4321-a29d-f425d04d7c91","type":"BasicTicker"}},"id":"a8bf6c50-c263-470b-b64d-8323458f8680","type":"Grid"},{"attributes":{"below":[{"id":"1cbb1492-031b-4806-815d-0df8514a8028","type":"CategoricalAxis"}],"left":[{"id":"66c6153c-c227-4fd6-a877-a67056ba232a","type":"LinearAxis"}],"legend":null,"plot_height":400,"plot_width":400,"renderers":[{"id":"4d5a874c-6bce-488e-87ce-9e4f36a59023","type":"BoxAnnotation"},{"id":"5d33fb5d-592f-4d5f-8da6-db5ec4c835eb","type":"GlyphRenderer"},{"id":"8aa2eeba-86df-4a40-ac57-f233bb62c2c6","type":"GlyphRenderer"},{"id":"fe0f564f-5c66-4ad0-a786-def0ef6a7e08","type":"GlyphRenderer"},{"id":"14e2b177-9600-4046-9fe7-28997ec5ba62","type":"GlyphRenderer"},{"id":"08ef03c1-674c-4d20-b85a-6f3d34fc130e","type":"GlyphRenderer"},{"id":"a62be72d-122e-4bff-8fe1-4f66b7bdf3b3","type":"GlyphRenderer"},{"id":"f6c9562a-284e-4e00-9454-9affcdc5603f","type":"GlyphRenderer"},{"id":"b2507a1e-5b5d-4517-86a0-3c031b54241b","type":"GlyphRenderer"},{"id":"ec209bfa-4626-4a50-a3b0-0b12c8a7071b","type":"GlyphRenderer"},{"id":"c868faa6-3fd4-4d14-91ef-cfb8e455dc48","type":"GlyphRenderer"},{"id":"b0b5d48a-a192-49ea-af6f-acc9dbd5bff8","type":"GlyphRenderer"},{"id":"797d0990-337d-4622-8745-0fd8f1b57a43","type":"GlyphRenderer"},{"id":"9f68eb07-885c-437d-a615-bdf4a6573414","type":"GlyphRenderer"},{"id":"3fad0721-c33d-451c-9bd7-4043ceff33be","type":"GlyphRenderer"},{"id":"220ec328-1e28-4e89-9f30-274faf9306f9","type":"GlyphRenderer"},{"id":"1cbb1492-031b-4806-815d-0df8514a8028","type":"CategoricalAxis"},{"id":"66c6153c-c227-4fd6-a877-a67056ba232a","type":"LinearAxis"},{"id":"a8bf6c50-c263-470b-b64d-8323458f8680","type":"Grid"}],"title":"MPG Summary (grouped by CYL, no outliers)","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"51409b80-ffbb-4480-af80-859703b24aa9","type":"ToolEvents"},"tools":[{"id":"653aa2ad-860d-4201-8289-1950fc2c1da4","type":"PanTool"},{"id":"5c9a0ad9-af52-41ec-8f44-b6b59f4bc5ac","type":"WheelZoomTool"},{"id":"07b5ac71-2640-43e8-8394-61b6e4a0dda7","type":"BoxZoomTool"},{"id":"9c090ed8-9c86-476a-af5e-cac893090525","type":"PreviewSaveTool"},{"id":"fbb7ecaa-50ec-4320-afbd-71d2a8fcfc11","type":"ResizeTool"},{"id":"874b8847-5252-4b25-b33d-d8e85b172198","type":"ResetTool"},{"id":"eb4a0580-53bc-421a-84b4-b09cbf36a828","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"cf53db1e-fa76-4524-bae2-bf2199342df7","type":"FactorRange"},"xgrid":false,"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"d48cb669-5ee6-4536-8d18-d4faa874364c","type":"Range1d"},"yscale":"auto"},"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"f185f58c-52b6-4253-ae38-82501cf138ce","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"54e81bd7-1e59-4f37-b5ba-e39207670cef","type":"ColumnDataSource"},"glyph":{"id":"5e86ac4c-db99-4282-9d73-05de43d13a83","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"220ec328-1e28-4e89-9f30-274faf9306f9","type":"GlyphRenderer"},{"attributes":{},"id":"27ae7986-115d-4941-a7fc-2d427fac7871","type":"CategoricalTickFormatter"},{"attributes":{},"id":"9e8febd1-bd5b-4311-a7d5-ffd5f614ceb4","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"7254f9e2-cfbb-4168-9a67-b338cbcc5baf","type":"ColumnDataSource"},"glyph":{"id":"dc288b3d-5cc4-4edc-81ad-25d735136335","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c868faa6-3fd4-4d14-91ef-cfb8e455dc48","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"4d5a874c-6bce-488e-87ce-9e4f36a59023","type":"BoxAnnotation"},"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"}},"id":"07b5ac71-2640-43e8-8394-61b6e4a0dda7","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a1425e6-21c4-4dce-a989-1eb3b82469d2","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"5a2c9412-6f1f-4d1d-8d7b-4123c55458ed","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"7268a34c-8f15-4be6-90af-916f76d0f05b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e3c4a8dc-5cb3-4615-8e5c-d11ec0eea968","type":"ColumnDataSource"},"glyph":{"id":"92311545-9ac7-4517-bc6d-2408af9c1bfa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3fad0721-c33d-451c-9bd7-4043ceff33be","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x1s","y1s","x0s","y0s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"4456a747-c0fd-4820-829c-f6061a6c6509","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"cf53db1e-fa76-4524-bae2-bf2199342df7","type":"FactorRange"},{"attributes":{"data_source":{"id":"f185f58c-52b6-4253-ae38-82501cf138ce","type":"ColumnDataSource"},"glyph":{"id":"88f04309-2ecd-4c86-9502-3b60dbc36f71","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"08ef03c1-674c-4d20-b85a-6f3d34fc130e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"88f04309-2ecd-4c86-9502-3b60dbc36f71","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"e3c4a8dc-5cb3-4615-8e5c-d11ec0eea968","type":"ColumnDataSource"},{"attributes":{},"id":"51409b80-ffbb-4480-af80-859703b24aa9","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x1s","y1s","x0s","y0s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"08a4517e-8a9a-4741-ba0a-1f27e52d9d80","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5a2c9412-6f1f-4d1d-8d7b-4123c55458ed","type":"ColumnDataSource"},"glyph":{"id":"4ae90a33-095c-42fa-be8a-a6964e9f432e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9f68eb07-885c-437d-a615-bdf4a6573414","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"53974b63-fc60-49dc-bf68-9b5b83a98405","type":"ColumnDataSource"},"glyph":{"id":"64bc6a72-1bde-4338-b53a-11966db48550","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5d33fb5d-592f-4d5f-8da6-db5ec4c835eb","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"53974b63-fc60-49dc-bf68-9b5b83a98405","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16d97932-aafe-4fe5-b94c-5ed297fe06bd","type":"Rect"},{"attributes":{"callback":null,"column_names":["x1s","y1s","x0s","y0s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"90a72688-5401-4f84-bcf3-45ec7d1008ca","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"2bd7fd36-2b98-4405-934e-c151276d885a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"}},"id":"9c090ed8-9c86-476a-af5e-cac893090525","type":"PreviewSaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"56bf3c90-c45a-4373-a045-dbc98314a329","type":"Rect"},{"attributes":{"plot":{"id":"d87bad40-6530-456f-a308-dbb13956e001","subtype":"Chart","type":"Plot"}},"id":"5c9a0ad9-af52-41ec-8f44-b6b59f4bc5ac","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"7254f9e2-cfbb-4168-9a67-b338cbcc5baf","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2e8a240c-8503-488a-af8e-54c164cb621f","type":"ColumnDataSource"},"glyph":{"id":"f5683f52-6a06-43c4-b06c-f8f4a48f2e3a","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a62be72d-122e-4bff-8fe1-4f66b7bdf3b3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ae90a33-095c-42fa-be8a-a6964e9f432e","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"64bc6a72-1bde-4338-b53a-11966db48550","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"9bf94747-b085-4c1f-9d3f-0447f1020203","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":47.56875000000001},"id":"d48cb669-5ee6-4536-8d18-d4faa874364c","type":"Range1d"}],"root_ids":["d87bad40-6530-456f-a308-dbb13956e001"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"b3b59d9d-9290-4162-98ae-69b4576dc6f0","elementid":"a5d0071e-9b70-42ff-893a-bb1c7cb08d43","modelid":"d87bad40-6530-456f-a308-dbb13956e001"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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