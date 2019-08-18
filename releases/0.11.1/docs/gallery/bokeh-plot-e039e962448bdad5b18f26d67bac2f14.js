
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
  };var element = document.getElementById("67214440-c2ff-48c6-867a-e7a224005754");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '67214440-c2ff-48c6-867a-e7a224005754' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d61af106-797b-4ad9-89dd-ccd3b12ac177":{"roots":{"references":[{"attributes":{"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"a45ea94a-4306-4b6e-9b9e-28fef12e77b9","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"interpreter":"python","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[-2.0],"interpreter":["python"],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["python:0.333333333333"],"y":[-1.0]}},"id":"dc2121b6-a291-4d7f-8848-89806332f699","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"4b0a39fd-5aa2-490c-9251-259323c333d6","type":"HelpTool"},{"attributes":{"data_source":{"id":"5b3fac3b-966f-44af-8212-3346f41cea9b","type":"ColumnDataSource"},"glyph":{"id":"04a8022b-8734-4031-914f-b1cdc4db5cab","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9b96914-4f97-4f9e-9901-2080b4130f46","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5b47421c-0695-4af9-996d-e2430006b9df","type":"ColumnDataSource"},"glyph":{"id":"7f0d1510-75a9-40e6-906d-d494867e60d9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eeba4d3a-e5cc-470a-af36-b64b0d809a0e","type":"GlyphRenderer"},{"attributes":{},"id":"4f877b58-084c-4248-8679-6dfebb7c8b1b","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"59945903-4969-49b8-a518-46343fbe0cec","type":"Circle"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"interpreter":"pypy","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[40.0],"interpreter":["pypy"],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["pypy:0.666666666667"],"y":[20.0]}},"id":"26c33739-151b-45fe-a43d-4d9a36e4b3a0","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"70944540-101e-49a9-b3dc-7748b8dd28b3","type":"Circle"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"interpreter":"python","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[5.0],"interpreter":["python"],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["python:0.666666666667"],"y":[2.5]}},"id":"b1db6ae7-2784-4286-91cd-3df4cd42b2e5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"dc2121b6-a291-4d7f-8848-89806332f699","type":"ColumnDataSource"},"glyph":{"id":"70944540-101e-49a9-b3dc-7748b8dd28b3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6bd76d4d-6259-4905-91ae-96cfd2bb1fcd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"interpreter":"jython","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[30.0],"interpreter":["jython"],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["jython:0.666666666667"],"y":[15.0]}},"id":"5b3fac3b-966f-44af-8212-3346f41cea9b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"e349463a-90d0-4f52-9324-a98ced96ad79","type":"Circle"},{"attributes":{"callback":null,"end":41.9,"start":-3.9000000000000004},"id":"22234f5d-1eb4-42c4-a73a-bfd203b2d2f5","type":"Range1d"},{"attributes":{"axis_label":"Mean( Timing )","formatter":{"id":"6de1ac36-7a88-4e9e-9b44-b19cbe96a76e","type":"BasicTickFormatter"},"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"},"ticker":{"id":"253831c3-c058-4d7d-a95a-48d8d4a7f6e6","type":"BasicTicker"}},"id":"f0a1613a-bb5d-4ba2-9aa3-e6dcdd4e2820","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"},"ticker":{"id":"253831c3-c058-4d7d-a95a-48d8d4a7f6e6","type":"BasicTicker"}},"id":"5bc8957d-65c0-4691-bf58-ba89ef801a9d","type":"Grid"},{"attributes":{"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"4513ce51-cc26-4b1b-a2b1-90fd95916925","type":"ResizeTool"},{"attributes":{"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"ded49560-4b17-4adc-9c78-711e456b9478","type":"ResetTool"},{"attributes":{"data_source":{"id":"f93db9a7-9d5d-4d35-ac09-26f748eb6b7b","type":"ColumnDataSource"},"glyph":{"id":"59945903-4969-49b8-a518-46343fbe0cec","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"50d1d922-94cc-42a9-b677-01497b560d7f","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["jython","pypy","python"]},"id":"c2e4b815-3a74-4971-82fb-44f9b75318cb","type":"FactorRange"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"f3f896b7-37fe-4c53-97c2-9af1c71bee05","type":"Circle"},{"attributes":{"data_source":{"id":"26c33739-151b-45fe-a43d-4d9a36e4b3a0","type":"ColumnDataSource"},"glyph":{"id":"f3f896b7-37fe-4c53-97c2-9af1c71bee05","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0911c0f6-a593-46c6-904b-ea949ca39362","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"ca2e1457-ce72-41fa-90cb-40b5bb9001ee","type":"BoxAnnotation"},"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"c7695e66-7baa-4619-9b0c-a5ec27efdd28","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"3c7054b0-9aed-4c3c-be1a-70c2f9c4152c","type":"PreviewSaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"04a8022b-8734-4031-914f-b1cdc4db5cab","type":"Circle"},{"attributes":{},"id":"253831c3-c058-4d7d-a95a-48d8d4a7f6e6","type":"BasicTicker"},{"attributes":{},"id":"3ebcd6a5-6006-4ce2-8737-4766fac2481c","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6de1ac36-7a88-4e9e-9b44-b19cbe96a76e","type":"BasicTickFormatter"},{"attributes":{},"id":"e798b898-92ef-4eb3-920d-ffb93105eaa0","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca2e1457-ce72-41fa-90cb-40b5bb9001ee","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"interpreter":"pypy","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[12.0],"interpreter":["pypy"],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["pypy:0.333333333333"],"y":[6.0]}},"id":"5b47421c-0695-4af9-996d-e2430006b9df","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"9a2d2a77-b081-4d72-85c1-08f2a292fa15","type":"CategoricalAxis"}],"left":[{"id":"f0a1613a-bb5d-4ba2-9aa3-e6dcdd4e2820","type":"LinearAxis"}],"legend":"top_right","plot_height":400,"plot_width":600,"renderers":[{"id":"ca2e1457-ce72-41fa-90cb-40b5bb9001ee","type":"BoxAnnotation"},{"id":"6bd76d4d-6259-4905-91ae-96cfd2bb1fcd","type":"GlyphRenderer"},{"id":"5b09c945-2b55-4b2e-ab0a-117b72084bc9","type":"GlyphRenderer"},{"id":"eeba4d3a-e5cc-470a-af36-b64b0d809a0e","type":"GlyphRenderer"},{"id":"0911c0f6-a593-46c6-904b-ea949ca39362","type":"GlyphRenderer"},{"id":"50d1d922-94cc-42a9-b677-01497b560d7f","type":"GlyphRenderer"},{"id":"d9b96914-4f97-4f9e-9901-2080b4130f46","type":"GlyphRenderer"},{"id":"4cf6f4ee-9ae2-4e17-a4d7-b4c30e96f0be","type":"Legend"},{"id":"9a2d2a77-b081-4d72-85c1-08f2a292fa15","type":"CategoricalAxis"},{"id":"f0a1613a-bb5d-4ba2-9aa3-e6dcdd4e2820","type":"LinearAxis"},{"id":"5bc8957d-65c0-4691-bf58-ba89ef801a9d","type":"Grid"}],"title":"Python Interpreter Sampling","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"e798b898-92ef-4eb3-920d-ffb93105eaa0","type":"ToolEvents"},"tools":[{"id":"8b3a24fb-e008-4ae1-a13a-5e8153d80422","type":"PanTool"},{"id":"a45ea94a-4306-4b6e-9b9e-28fef12e77b9","type":"WheelZoomTool"},{"id":"c7695e66-7baa-4619-9b0c-a5ec27efdd28","type":"BoxZoomTool"},{"id":"3c7054b0-9aed-4c3c-be1a-70c2f9c4152c","type":"PreviewSaveTool"},{"id":"4513ce51-cc26-4b1b-a2b1-90fd95916925","type":"ResizeTool"},{"id":"ded49560-4b17-4adc-9c78-711e456b9478","type":"ResetTool"},{"id":"4b0a39fd-5aa2-490c-9251-259323c333d6","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"c2e4b815-3a74-4971-82fb-44f9b75318cb","type":"FactorRange"},"xgrid":false,"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"22234f5d-1eb4-42c4-a73a-bfd203b2d2f5","type":"Range1d"},"yscale":"auto"},"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"b1db6ae7-2784-4286-91cd-3df4cd42b2e5","type":"ColumnDataSource"},"glyph":{"id":"e349463a-90d0-4f52-9324-a98ced96ad79","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5b09c945-2b55-4b2e-ab0a-117b72084bc9","type":"GlyphRenderer"},{"attributes":{"legends":[["1st",[{"id":"6bd76d4d-6259-4905-91ae-96cfd2bb1fcd","type":"GlyphRenderer"}]],["2nd",[{"id":"5b09c945-2b55-4b2e-ab0a-117b72084bc9","type":"GlyphRenderer"}]]],"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"4cf6f4ee-9ae2-4e17-a4d7-b4c30e96f0be","type":"Legend"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"interpreter":"jython","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.0],"interpreter":["jython"],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["jython:0.333333333333"],"y":[11.0]}},"id":"f93db9a7-9d5d-4d35-ac09-26f748eb6b7b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"}},"id":"8b3a24fb-e008-4ae1-a13a-5e8153d80422","type":"PanTool"},{"attributes":{"axis_label":"Interpreter","formatter":{"id":"3ebcd6a5-6006-4ce2-8737-4766fac2481c","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b0ee3835-8a31-4606-a129-f9caff409eef","subtype":"Chart","type":"Plot"},"ticker":{"id":"4f877b58-084c-4248-8679-6dfebb7c8b1b","type":"CategoricalTicker"}},"id":"9a2d2a77-b081-4d72-85c1-08f2a292fa15","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"7f0d1510-75a9-40e6-906d-d494867e60d9","type":"Circle"}],"root_ids":["b0ee3835-8a31-4606-a129-f9caff409eef"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"d61af106-797b-4ad9-89dd-ccd3b12ac177","elementid":"67214440-c2ff-48c6-867a-e7a224005754","modelid":"b0ee3835-8a31-4606-a129-f9caff409eef"}];
          
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